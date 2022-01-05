using System;
using System.Collections.Generic;

namespace Spooked.Models
{
    public class Movie
    {

        public Guid Id { get; set; }
        public string Title { get; set; }
        public string ImdbId { get; set; }
        public string Poster { get; set; }
        public int SubGenreId { get; set; }
        public bool Watched { get; set; }

        public IEnumerable<Trigger> TriggerList {get; set;}
    }

}