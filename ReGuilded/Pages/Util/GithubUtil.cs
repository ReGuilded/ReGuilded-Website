using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Primitives;
using Octokit;

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

                GitHubClient githubClient = new(new ProductHeaderValue("ReGuilded-Website"));
                // Gets latest release
                var latestRelease = await githubClient.Repository.Release.GetLatest("ReGuilded", "ReGuilded-Setup");
                // Gets each file in the latest release
                foreach (var releaseAsset in latestRelease.Assets)
                {
                    var downloadUrl = releaseAsset.BrowserDownloadUrl;
                    // Gets the platform of the file
                    var platform =
                        downloadUrl.EndsWith(".exe") ? "windows"
                        : downloadUrl.EndsWith(".dmg") ? "mac"
                        : downloadUrl.EndsWith(".AppImage") ? "linux"
                        : null;
                    // Discards source downloads
                    if (platform != null)
                    {
                        // Adds it to downloads list
                        downloads.Add(new FetchedDownload()
                        {
                            Platform = platform,
                            DownloadUrl = downloadUrl,
                            DisplayName = char.ToUpper(platform[0]) + platform[1..]
                        });
                    }
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