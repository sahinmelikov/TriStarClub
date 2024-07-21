
using Microsoft.EntityFrameworkCore;
using TriStarClub.Models;


namespace TriStarClub
{
    public class AppDbContext : DbContext
    {


        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

       
        public DbSet<News> Newss { get; set; }
        public DbSet<Race> Races { get; set; }
       
        public DbSet<SonuclarAciklandi> sonuclarAciklandis { get; set; }

    }
}
