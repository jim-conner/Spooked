using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spooked.DataAccess;

namespace Spooked.Controllers
{
    [Route("api/movies")]
    [ApiController]
    public class MoviesController : ControllerBase
    {

        private MovieRepository _repo;

        public MoviesController(MovieRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllMovies()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("movieId/{id}")]
        public IActionResult getMovieById(Guid id)
        {
            var singleMovie = _repo.GetById(id);

            if (singleMovie == null)
            {
                return NotFound($"No movie found with MovieId: {id}.");
            }
            return Ok(singleMovie);
        }

        [HttpGet("imdbId/{imdbId}")]
        public IActionResult GetMovieByImdbId(string imdbId)
        {
            var singleMovie = _repo.GetByImdbId(imdbId);

            if (singleMovie == null)
            {
                return NotFound($"No movie found with ImdbId: {imdbId}.");
            }
            return Ok(singleMovie);
        }

        [HttpGet("subGenre/{subGenreId}")]
        public IActionResult GetMovieBySubGenreId(int subGenreId)
        {
            var singleMovie = _repo.GetBySubGenreId(subGenreId);

            if (singleMovie == null)
            {
                return NotFound($"Movie doesn't exist in localDB, or no SubGenreId matching: {subGenreId}.");
            }
            return Ok(singleMovie);

        }
    }
}
