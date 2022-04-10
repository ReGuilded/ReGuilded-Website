using System.Diagnostics;
using System.Net.Http.Headers;
using System.Text.Json;

namespace ReGuilded.Pages.Util
{
    public static class GithubUtil
    {
        private static readonly HttpClient HttpClient = new HttpClient();
        static GithubUtil()
        {
            HttpClient.DefaultRequestHeaders.UserAgent.Add(new ProductInfoHeaderValue("ReGuilded-Website", "2.0.0-alpha"));
        }
        
        public static async Task <List <FetchedDownload>?> FetchedDownloads()
        {
            var downloads = new List<FetchedDownload>();
            
            try
            {
                var httpResponseMessage = await HttpClient.GetAsync("https://api.github.com/repos/ReGuilded/ReGuilded-Installer/releases/latest");
                if (!httpResponseMessage.IsSuccessStatusCode) return null;

                var response = httpResponseMessage.Content.ReadAsStringAsync().Result;
                if (string.IsNullOrEmpty(response)) return null;

                var responseObj = JsonDocument.Parse(response);
                if (responseObj.RootElement.TryGetProperty("assets", out var assetsArr))
                {
                    foreach (var downloadUrl in assetsArr.EnumerateArray().Select(assetObj => assetObj.GetProperty("browser_download_url").GetString()))
                    {
                        if (downloadUrl == null) return null;
                        var platform =
                            downloadUrl.EndsWith(".AppImage") ? "linux"   :
                            downloadUrl.EndsWith(".exe")      ? "windows" :
                            downloadUrl.EndsWith(".dmg")      ? "mac"     :
                                                                null;
                        
                        if (platform == null) return null;
                        downloads.Add(new FetchedDownload()
                        {
                            Platform = platform,
                            DownloadUrl = downloadUrl,
                            DisplayName = char.ToUpper(platform[0]) + platform[1..]
                        });
                    }
                } else { return null; }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Internal Server Error:\n{0}", e);
                return null;
            }
            
            return downloads;
        }

    }
    
    /// <summary>
    /// A GitHub repository release.
    /// </summary>
    public class FetchedDownload
    {
        /// <summary>
        /// The platform/OS of the download.
        /// </summary>
        /// <value>OS</value>
        public string? Platform { get; set; }
        /// <summary>
        /// The URL link to download the release file.
        /// </summary>
        /// <value>URL</value>
        public string? DownloadUrl { get; set; }
        /// <summary>
        /// The name of the release.
        /// </summary>
        /// <value>Name</value>
        public string? DisplayName { get; set; }
    }
}