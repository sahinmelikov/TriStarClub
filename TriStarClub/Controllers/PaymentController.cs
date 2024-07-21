using Microsoft.AspNetCore.Mvc;
using Stripe;
using TriStarClub.Models;

namespace TriStarClub.Controllers
{
    public class PaymentController : Controller
    {
        // Stripe API Anahtarını buraya ekle
        private readonly string _stripeSecretKey = "sk_test_51PR8vXP9vxtyBurFd5zcA7J0HcjxeemLmeyQtXZrAnv7Vh40YZ1hXrYyQMeV8Kp7m79eAgg0c7rltypZsX5gF1w400n06MESYq";

        // GET: Payment
        public ActionResult Index()
        {
            return View();
        }

        // POST: Payment
        [HttpPost]
        public ActionResult ProcessPayment(PaymentModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    StripeConfiguration.ApiKey = _stripeSecretKey;

                    var options = new ChargeCreateOptions
                    {
                        Amount = model.Amount * 100, // Amount in cents
                        Currency = "usd",
                        Source = "tok_visa", // This token is a test token provided by Stripe for testing purposes
                        Description = "Test Charge"
                    };

                    var service = new ChargeService();
                    Charge charge = service.Create(options);

                    if (charge.Status == "succeeded")
                    {
                        ViewBag.Message = "Payment successful!";
                    }
                    else
                    {
                        ViewBag.Message = "Payment failed!";
                    }
                }
                catch (Exception ex)
                {
                    ViewBag.Message = $"Error: {ex.Message}";
                }
            }
            else
            {
                ViewBag.Message = "Invalid payment details.";
            }

            return View("Index", model);
        }
    }
}