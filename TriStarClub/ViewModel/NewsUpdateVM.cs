﻿namespace TriStarClub.ViewModel
{
    public class NewsUpdateVM
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime DateTime { get; set; }
        public IFormFile Photo { get; set; }
    }
}
