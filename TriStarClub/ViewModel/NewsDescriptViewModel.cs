using TriStarClub.Models;

namespace TriStarClub.ViewModel
{
    public class NewsDescriptViewModel
    {
        public News NewsItem { get; set; }
        public List<News> SimilarNews { get; set;}
    }
}
