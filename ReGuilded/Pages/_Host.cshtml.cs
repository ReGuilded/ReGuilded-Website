namespace ReGuilded.Pages {
    using Microsoft.AspNetCore.Mvc.RazorPages;
    using Microsoft.Extensions.Caching.Memory;
    using System.Diagnostics;
    using System.Net.Http.Headers;
    using Util;

    public class HostModel : PageModel {
        private readonly IMemoryCache _cache;
        private readonly HttpClient _httpClient = new HttpClient();
        private readonly string _cacheKey = "EasyInstallerDownloads";

        /// <summary>
        /// Determines whether there was any errors during page fetching.
        /// </summary>
        /// <value>Error occured</value>
        public bool InternalServerError { get; private set; }

        /// <summary>
        /// The fetched list of all downloads from latest release.
        /// </summary>
        /// <value>List of Downloads</value>
        public List<FetchedDownload>? FetchedDownloads { get; set; }

        public HostModel(IMemoryCache cache) {
            _cache = cache;
            _httpClient.DefaultRequestHeaders.UserAgent.Add(new ProductInfoHeaderValue("ReGuilded-Website", "1.0.0-alpha"));
        }

        public async Task OnGet() {
            try {
                FetchedDownloads = await GithubUtil.FetchDownloads(_httpClient, _cache, _cacheKey, TimeSpan.FromMinutes(30));
            } catch (Exception e) {
                InternalServerError = true;
                Console.WriteLine("Internal Server Error:\n{0}", e);
            }
        }
    }
    
}
