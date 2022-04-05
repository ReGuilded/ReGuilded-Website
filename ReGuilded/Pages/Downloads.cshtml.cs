using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;
using ReGuilded.Pages.Util;

namespace ReGuilded.Pages
{
    public class DownloadsModel : PageModel
    {
        private readonly IMemoryCache _cache;
        /// <summary>
        /// Determines whether there was any errors during page fetching.
        /// </summary>
        /// <value>Error occurred</value>
        public bool InternalServerError { get; private set; } = false;
        /// <summary>
        /// The fetched list of all downloads from latest release.
        /// </summary>
        /// <value>List of downloads</value>
        // [TempData] - Can't serialize it error
        public List<FetchedDownload>? FetchedDownloads { get; set; }
        public DownloadsModel(IMemoryCache cache) =>
            _cache = cache;
        public async Task OnGetAsync()
        {
            try
            {
                // Get list of all downloads
                List<FetchedDownload> tempFetchedDownloads = await GithubUtil.FetchedDownloads(_cache, "github_downloads", TimeSpan.FromMinutes(30));
                // Check which platform user is currently using from browser's user agent. Defaults to Windows
                string userAgent = Request.Headers["User-Agent"].ToString(),
                       userPlatform =
                            userAgent.Contains("Linux") ? "linux"
                            : userAgent.Contains("Mac") ? "mac"
                            : "windows";
                // Gets the download based user's platform
                int platformIndex = tempFetchedDownloads.FindIndex(download => download.Platform == userPlatform);
                FetchedDownload plaformItem = tempFetchedDownloads[platformIndex];
                // Adds it in the middle
                tempFetchedDownloads.Remove(plaformItem);
                tempFetchedDownloads.Insert(1, plaformItem);
                // Add it to the list
                FetchedDownloads = tempFetchedDownloads;
            }
            catch (Exception e)
            {
                InternalServerError = true;
                Console.WriteLine("Internal Server Error:\n{0}", e);
            }

        }
    }
}