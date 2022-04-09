using System.Diagnostics;
using System.Text.Json;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Primitives;

namespace ReGuilded.Pages.Util
{
    public class GithubUtil
    {
        public static async Task<List<FetchedDownload>> FetchedDownloads(IMemoryCache cache, string cacheKey, TimeSpan cacheTime)
        {
            // Get cached value
            if (!cache.TryGetValue(cacheKey, out List<FetchedDownload> downloads))
            {
                downloads = new List<FetchedDownload>();

                try
                {
                    HttpResponseMessage httpResponseMessage = await new HttpClient().GetAsync("https://api.github.com/repos/ReGuilded/ReGuilded-Installer/releases/latest");
                    if (!httpResponseMessage.IsSuccessStatusCode) return null;
                    
                    var response = httpResponseMessage.Content.ReadAsStringAsync().Result;
                    if (string.IsNullOrEmpty(response)) return null;

                    JsonDocument responseObj = JsonDocument.Parse(response);
                    if (responseObj.RootElement.TryGetProperty("assets", out JsonElement assetsArr))
                    {
                        foreach (JsonElement assetObj in assetsArr.EnumerateArray())
                        {
                            string? downloadUrl = assetObj.GetProperty("browser_download_url").GetString();

                            if (downloadUrl == null) return null;
                            string? platform =
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

                cache.Set(cacheKey, downloads, new MemoryCacheEntryOptions().AddExpirationToken(new CancellationChangeToken(new CancellationTokenSource(cacheTime).Token)));
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
        public string Platform { get; set; }
        /// <summary>
        /// The URL link to download the release file.
        /// </summary>
        /// <value>URL</value>
        public string DownloadUrl { get; set; }
        /// <summary>
        /// The name of the release.
        /// </summary>
        /// <value>Name</value>
        public string DisplayName { get; set; }
    }
}