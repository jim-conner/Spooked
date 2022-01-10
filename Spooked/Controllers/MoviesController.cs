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

        [HttpGet("filteredMovies")]
        public IActionResult getFilteredMovies(int triggerId, int subGenreId)
        {
            return Ok(_repo.getMoviesByTriggerAndSubGenre(triggerId, subGenreId));
        }

        [HttpGet("trigger/{triggerId}")]
        public IActionResult FilterMoviesByTriggers(int triggerId)
        {
            var filteredMovies = _repo.getMoviesByTrigger(triggerId);

            if (filteredMovies == null)
            {
                return NotFound($"Didn't find any movies....");
            }
            return Ok(filteredMovies);

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
        public IActionResult GetMoviesBySubGenreId(int subGenreId)
        {
            var moviesBySubGenre = _repo.GetBySubGenreId(subGenreId);

            if (moviesBySubGenre == null)
            {
                return NotFound($"Didn't find any movies with SubGenreId: {subGenreId}.");
            }
            return Ok(moviesBySubGenre);
        }

        [HttpPut("movieId/watched/{id}")]
        public IActionResult updateWatchedBool(Guid id)
        {
            var movieToUpdate = _repo.GetById(id);

            if (movieToUpdate == null)
                return NotFound($"Could not find a movie with ID: {id} to update.");

            movieToUpdate.Watched = !movieToUpdate.Watched;

            var updatedMovie = _repo.ToggleWatched(id, movieToUpdate);

            return Ok(updatedMovie);
        }
        
    }
}
