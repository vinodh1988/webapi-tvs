using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyRestAPI.Controllers
{
    public class DataController : ApiController
    {
        public string Get() {
            return "This is first WEB API";
        }

        public string[] Get(int id) {
            string[] n = { "Ravi", "Raghav", "Ramesh", "Kiran" };
            return n;
        }
    }
}
