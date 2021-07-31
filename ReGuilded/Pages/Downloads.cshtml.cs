using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace ReGuilded.Pages
{
    public class DownloadsModel : PageModel
    {
        private readonly ILogger<DownloadsModel> _logger;

        public DownloadsModel(ILogger<DownloadsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}