using System;

namespace Spooked.Models
{
    public class Movie
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Year { get; set; }
        public string ImdbId { get; set; }
        //public string Type { get; set; } //I don't think i need this double chk tho
        public string Poster { get; set; }
        public int SubGenreId { get; set; }
        public bool Watched { get; set; }
    }
}