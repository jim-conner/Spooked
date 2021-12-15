using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Spooked.Models
{
    public class OmdbAPIMap
    {
        // Note: not using this model yet
        // currently doing JS Promise.all() on FE
        public string Title { get; set; }
        public string ImdbId { get; set; }
        public string Year { get; set; }
        public string Rated { get; set; }
        public string Genre { get; set; }
        public string Poster { get; set; }
        public string ImdbRating { get; set; }

    }
}
