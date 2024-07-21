using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

using TriStarClub.Models;
using TriStarClub.ViewModel;

namespace TriStarClub.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly AppDbContext _context;

        public HomeController(ILogger<HomeController> logger, AppDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult NavbarRace()
        {
            var viewModel = new HomeVM
            {
                

                Races = _context.Races.ToList(),
               
            };
            return View(viewModel);
        }
        public IActionResult ViewDetailsRace(int id)
        {
            var raceitem = _context.Races.FirstOrDefault(n => n.Id == id);
            if (raceitem == null)
            {
                return NotFound();
            }

            // Benzer haberleri almak için örnek bir mantık
            var similarRace = _context.Races
                                      .Where(n => n.Id != id)
                                      .OrderByDescending(n => n.DateTime)
                                      .Take(3)
                                      .ToList();

            var viewModel = new RaceDetailsViewModel
            {
                RaceItem = raceitem,
                SimilarRAce = similarRace
            };

            return View(viewModel);
        }
        public IActionResult NewsAll()
        {

            var viewModel = new HomeVM
            {


                News = _context.Newss.ToList(),

            };
            return View(viewModel);
        }
       
    }
}
