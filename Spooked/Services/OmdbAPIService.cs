using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Spooked.Models;

namespace Spooked.Services
{
    public class OmdbAPIService : IOmdbAPIService
    {
        private OmdbAPIKey _OmdbAPIKeyConfig;

        public OmdbAPIService(IOptions<OmdbAPIKey> opts)
        {
            _OmdbAPIKeyConfig = opts.Value;
        }

        // using .NET HttpClient library 
        private static readonly HttpClient client;

        static OmdbAPIService()
        {
            client = new HttpClient()
            {
                BaseAddress = new Uri("http://www.omdbapi.com/")
            };
        }

        //returning object not list
        public async Task<OmdbAPIResponse> GetOmdbMovieById(string imdbId)
        {
            var url = string.Format($"?apikey={_OmdbAPIKeyConfig.ApiKey}&i={imdbId}", imdbId);
            //var result = new List<OmdbAPIMap>();
            var response = await client.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                var stringResponse = await response.Content.ReadAsStringAsync();
                
                //don't need to match case here b/c it's already cap'd
                var result = JsonSerializer.Deserialize<OmdbAPIResponse>(stringResponse);

                return result;

            }
            else
            {
                throw new HttpRequestException(response.ReasonPhrase);
            }

        }
    }
}
