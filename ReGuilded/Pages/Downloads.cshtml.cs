using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
                FetchedDownloads = await GithubUtil.FetchedDownloads(_cache, "github_downloads", TimeSpan.FromMinutes(30));
            } catch (Exception e) {
                InternalServerError = true;
                Console.WriteLine("Internal Server Error:", e);
            }
            
        }
    }
}