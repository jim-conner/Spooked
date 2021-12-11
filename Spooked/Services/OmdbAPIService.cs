using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Spooked.Models;

namespace Spooked.Services
{
    public class OmdbAPIService : IOmdbAPIService
    {
        private static readonly HttpClient client;

        static OmdbAPIService()
        {
            client = new HttpClient()
            {
                BaseAddress = new Uri("http://www.omdbapi.com")
            };
        }

        public async Task<List<OmdbAPIMap>> GetOmdbMovieById(string imdbId)
        {
            var url = string.Format("/?apikey={0}&i={1}", imdbId);
            var result = new List<OmdbAPIMap>();
            var response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                var stringResponse = await response.Content.ReadAsStringAsync();

                result = JsonSerializer.Deserialize<List<OmdbAPIMap>>(stringResponse), 
                    new JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
            }
            else
            {
                throw new HttpRequestException(response.ReasonPhrase);
            }

            return result;
        }
    }
}
