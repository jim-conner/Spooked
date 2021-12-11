using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Spooked.Models;

namespace Spooked.Services
{
    public interface IOmdbAPIService
    {
        // if i wanna do a list for SEARCH add it here
        Task<OmdbAPIResponse> GetOmdbMovieById(string imdbId);
    }
}
