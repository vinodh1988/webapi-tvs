using System.Web;
using System.Web.Optimization;

namespace MyRestAPI
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/client").Include(
                   "~/Client/dataforms-dataforms-module-es5.js",
                   "~/Client/main-es5.js",
                   "~/Client/polyfills-es5.js",
                   "~/Client/runtime-es5.js",
                   "~/Client/scripts.js",
                   "~/Client/styles-es5.js",
                   "~/Client/vendor-es5.js"
                ));

        }
    }
}
