using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using ReGuilded.Pages.Util;

namespace ReGuilded.Pages {
    public class DownloadsModel : PageModel {
        private readonly ILogger<DownloadsModel> _logger;
        private readonly IMemoryCache _cache;

        public DownloadsModel(ILogger<DownloadsModel> logger, IMemoryCache cache) {
            _logger = logger;
            _cache = cache;
        }

        public bool InternalServerError { get; private set; } = false;
        public List<FetchedDownload> FetchedDownloads { get; set; }
        public async Task OnGetAsync() {
            try {
                List<FetchedDownload> tempFetchedDownloads = await GithubUtil.FetchedDownloads(_cache, "github_downloads", TimeSpan.FromMinutes(30));
                var userAgent = Request.Headers["User-Agent"].ToString();
                string userPlatform = userAgent.Contains("Windows") ? "windows"
                                    : userAgent.Contains("Linux") ? "linux"
                                    : userAgent.Contains("Mac") ? "mac"
                                    : null;

                var platformIndex = tempFetchedDownloads.FindIndex(download => download.Platform == userPlatform);
                FetchedDownload plaformItem = tempFetchedDownloads[platformIndex];
                tempFetchedDownloads.Remove(plaformItem);
                tempFetchedDownloads.Insert(1, plaformItem);

                FetchedDownloads = tempFetchedDownloads;
            } catch (Exception e) {
                InternalServerError = true;
                Console.WriteLine("Internal Server Error:", e);
            }
            
        }
    }
}