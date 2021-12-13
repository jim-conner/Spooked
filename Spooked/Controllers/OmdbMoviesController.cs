using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Spooked.Services;



namespace Spooked.Controllers
{
    [Route("api/omdbMovies/")]
    [ApiController]
    public class OmdbMoviesController : ControllerBase
    {
        private readonly ILogger<MoviesController> _logger;
        private readonly IOmdbAPIService _omdbService;

        public OmdbMoviesController(ILogger<MoviesController> logger, IOmdbAPIService omdbService)
        {
            _logger = logger;
            _omdbService = omdbService;
        }

        //get movie from OmdbAPI
        [HttpGet]
        public async Task<IActionResult> GetByImdbId(string imdbId)
        {

            var singleMovie = await _omdbService.GetOmdbMovieById(imdbId);

            if (singleMovie == null)
            {
                return NotFound($"No movie found with ImdbId: {imdbId}.");
            }

            return Ok(singleMovie);
        }
    }
}
