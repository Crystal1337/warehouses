using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WarehousesAPI.Attributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class ApiKeyAuthAttribute : Attribute, IAsyncActionFilter
    {
        private const string apiKeyHeaderName = "ApiKey";
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            //check if there is any apiKey provided
            if(!context.HttpContext.Request.Headers.TryGetValue(apiKeyHeaderName, out var givenApiKey))
            {
                context.Result = new UnauthorizedResult();
                return;
            }

            //get correct ApiKey from config
            var configuration = context.HttpContext.RequestServices.GetRequiredService<IConfiguration>();
            var apiKey = configuration.GetValue<string>(apiKeyHeaderName);

            //check if ApiKey provided is equal to Apikey from config
            if(!apiKey.Equals(givenApiKey))
            {
                context.Result = new UnauthorizedResult();
                return;
            }

            await next();

        }
    }
}