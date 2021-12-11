using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Spooked.Models;

namespace Spooked.Services
{
    public interface IOmdbAPIService
    {
        Task<List<OmdbAPIMap>> GetOmdbMovieById(string imdbId);
    }
}
