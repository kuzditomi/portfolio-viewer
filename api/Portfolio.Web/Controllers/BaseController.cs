using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Portfolio.Web.Controllers
{
    public abstract class BaseController : ControllerBase
    {
        protected string GetUserId()
        {
            return User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;
        }
    }
}
