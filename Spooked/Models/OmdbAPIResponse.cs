using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Spooked.Models
{
    public class OmdbAPIResponse
    {
        //not sure this is correct bc I am only returning json {}
        // going to try it with just mapping to object first 12/11 Noon-ish

        //[JsonPropertyName("list")]
        //public List<OmdbMovie> OmdbMovies { get; set; }
        [JsonPropertyName("Title")]
        public string Title { get; set; }
        [JsonPropertyName("imdbID")]
        public string ImdbId { get; set; }
        [JsonPropertyName("Year")]
        public string Year { get; set; }
        [JsonPropertyName("Rated")]
        public string Rated { get; set; }
        [JsonPropertyName("Genre")]
        public string Genre { get; set; }
        [JsonPropertyName("Poster")]
        public string Poster { get; set; }
        [JsonPropertyName("imdbRating")]
        public string ImdbRating { get; set; }

    }

    //trying to use Response (^^ above) first
    //public class OmdbMovie
    //{

    //}
}
