using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;

namespace ReGuilded.Controllers;

using Microsoft.Extensions.Caching.Memory;

[Route("[controller]/[action]")]
public class PageController : Controller {
    
    public IActionResult Set(string? culture, string redirectUri) {
        if (culture != null)
        {
            HttpContext.Response.Cookies.Append(
                CookieRequestCultureProvider.DefaultCookieName,
                CookieRequestCultureProvider.MakeCookieValue(
                    new RequestCulture(culture, culture)));
        }

        return LocalRedirect(redirectUri);
    }

}
