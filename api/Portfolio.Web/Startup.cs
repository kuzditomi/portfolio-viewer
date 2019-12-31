using System;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Security.Claims;
using Portfolio.Web.Data;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.HttpOverrides;

namespace Portfolio.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            // DB
            services.AddDbContext<ApplicationDbContext>(options =>
             options.UseSqlite("Data Source=portfolio.db")
            );
            //options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=kuzditomi-portfolio-test-53bc9b9d-9d6a-45d4-8429-2a2761773502;Trusted_Connection=True;MultipleActiveResultSets=true"));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                //.AddUserManager<AppUserManager>()
                .AddDefaultTokenProviders();

            // Auth
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = OpenIdConnectDefaults.AuthenticationScheme;
            })
            .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options =>
            {
                // required or else it will result in an endless-login / redirect loop if it's called from an iframe in sharepoint
                options.SlidingExpiration = true;
                options.ExpireTimeSpan = TimeSpan.FromMinutes(int.Parse(Configuration["SessionCookieLifeTimeInMinutes"]));

                options.Cookie.HttpOnly = false;
                options.Cookie.SameSite = SameSiteMode.None;
                options.LoginPath = "/account/login";
            })
            .AddOpenIdConnect(authenticationScheme: OpenIdConnectDefaults.AuthenticationScheme, displayName: "Google", options =>
             {
                 options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;

                 options.Authority = "https://accounts.google.com";
                 options.ClientId = Configuration["PORTFOLIO_ClientId"];
                 options.ClientSecret = Configuration["PORTFOLIO_ClientSecret"];
                 options.CallbackPath = "/signin-google";
                 options.ResponseType = OpenIdConnectResponseType.Code;

                 options.GetClaimsFromUserInfoEndpoint = true;
                 options.SaveTokens = true;
                 options.UseTokenLifetime = false;
                 //options.UsePkce = true;

                 options.Scope.Add("openid");
                 options.Scope.Add("profile");
                 options.Scope.Add("email");

                 options.TokenValidationParameters = new TokenValidationParameters
                 {
                     NameClaimType = "name",
                 };

                 options.Events = new OpenIdConnectEvents()
                 {
                     OnUserInformationReceived = async userInfo =>
                     {
                         var identity = (ClaimsIdentity)userInfo.Principal.Identity;
                         var email = identity.Claims.First(c => c.Type == ClaimTypes.Email).Value;

                         var userManager = userInfo.HttpContext.RequestServices.GetService<UserManager<ApplicationUser>>();
                         var user = await userManager.FindByEmailAsync(email);

                         if (user == null)
                         {
                             var newIdentity = await userManager.CreateAsync(new ApplicationUser
                             {
                                 UserName = email,
                                 Email = email,
                                 EmailConfirmed = true
                             });

                             user = await userManager.FindByEmailAsync(email);
                         }

                         var signInManager = userInfo.HttpContext.RequestServices.GetService<SignInManager<ApplicationUser>>();
                         await signInManager.SignInAsync(user, false);

                         await Task.FromResult(0);
                     },
                 };
             });

            services.AddAuthorization();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use((context, next) =>
            {
                context.Request.Scheme = "https"; // it was needed for the reverse-proxy despite X-Forwarded-Proto
                return next();
            });

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
