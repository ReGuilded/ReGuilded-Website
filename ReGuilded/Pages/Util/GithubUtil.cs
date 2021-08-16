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

namespace ReGuilded.Pages.Util {
    public class GithubUtil {

        private static readonly Regex WindowsRegex = new Regex($"exe");
        private static readonly Regex LinuxRegex = new Regex($"AppImage");
        private static readonly Regex MacRegex = new Regex($"dmg");
        
        public static async Task<List<FetchedDownload>> FetchedDownloads(IMemoryCache cache, string cacheKey, TimeSpan cacheTime) {
            List<FetchedDownload> downloads;

            if (!cache.TryGetValue(cacheKey, out downloads)) {
                downloads = new List<FetchedDownload>();
                GitHubClient githubClient = new(new ProductHeaderValue("ReGuilded-Website"));

                var latestRelease = await githubClient.Repository.Release.GetLatest("ReGuilded", "ReGuilded-Setup");

                foreach (var releaseAsset in latestRelease.Assets) {
                    var downloadUrl = releaseAsset.BrowserDownloadUrl;
                    var platform = WindowsRegex.Match(downloadUrl).Success ? "windows" 
                                    : LinuxRegex.Match(downloadUrl).Success ? "linux" 
                                    : MacRegex.Match(downloadUrl).Success ? "mac"
                                    : null;

                    if (platform != null) {
                        downloads.Add(new FetchedDownload() {
                            Platform = platform,
                            DownloadUrl = downloadUrl,
                            DisplayName = (char.ToUpper(platform[0]) + platform.Substring(1))
                        });
                    }
                }

                cache.Set(cacheKey, downloads, new MemoryCacheEntryOptions().AddExpirationToken(new CancellationChangeToken(new CancellationTokenSource(cacheTime).Token)));
            }

            return downloads;
        }

    }

    public class FetchedDownload {
        public string Platform { get; set; }
        public string DownloadUrl { get; set; }
        public string DisplayName { get; set; }
    }
}