using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Web.Data;

namespace Portfolio.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private SignInManager<ApplicationUser> _signInManager;
        public AccountController(SignInManager<ApplicationUser> signInManager)
        {
            this._signInManager = signInManager;
        }

        [HttpGet]
        [Route("login")]
        public IActionResult Login()
        { 
            if (!HttpContext.User.Identity.IsAuthenticated)
            {
                return Challenge(OpenIdConnectDefaults.AuthenticationScheme);
            }

            return Redirect("/");
        }

        [HttpGet]
        [Authorize]
        [Route("logout")]
        public async Task<IActionResult> Logout()
        { 
            await _signInManager.SignOutAsync();
            return Ok();
        }

        [HttpGet]
        [Route("me")]
        public IActionResult Me()
        {
            if (!HttpContext.User.Identity.IsAuthenticated)
            {
                return Unauthorized();
            }

            return Ok(HttpContext.User.Identity.Name);
        }
    }
}
