using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spooked.DataAccess;
using Spooked.Models;

namespace Spooked.Controllers
{
    [Route("api/watchlist/")]
    [ApiController]
    public class WatchListController : ControllerBase
    {
        private WatchListRepository _repo;

        public WatchListController(
            WatchListRepository repo)
        {
            _repo = repo;

        }
        [HttpGet]
        public IActionResult GetAllWatchListMovies()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetWatchListMovieById(Guid id)
        {
            WatchList watchListMovie = _repo.GetById(id);

            if (watchListMovie == null)
            {
                return NotFound("No watchList movie exists with id: {id}");

            }
            return Ok(watchListMovie);
        }

        [HttpGet("movie/{id}")]
        public IActionResult GetWatchListMovieByMovieId(Guid id)
        {
            WatchList watchListMovie = _repo.GetByMovieId(id);

            if (watchListMovie == null)
            {
                return NotFound("No watchList movie exists with MovieId: {id}");

            }
            return Ok(watchListMovie);
        }

        [HttpPost]
        public IActionResult AddMovieToWatchList(WatchList newWatchListMovie)
        {
            var doesMovieExistAlready = _repo.GetWatchListByUserIdMovieId(newWatchListMovie.UserId, newWatchListMovie.MovieId);

            if (doesMovieExistAlready != null)
                return BadRequest("Movie already added to watchlist.");

            if (newWatchListMovie.UserId == Guid.Empty 
                || newWatchListMovie.MovieId == Guid.Empty)
            {
                return BadRequest("UserId & MovieId are required.");
            }


            _repo.Add(newWatchListMovie);

            return Created($"/api/watchlist/{newWatchListMovie.Id}", newWatchListMovie);
        }

        [HttpDelete("{id}")]
        public IActionResult RemoveMovieFromWatchList (Guid id)
        {
            _repo.Remove(id);

            return Ok();
        }
    }
}
