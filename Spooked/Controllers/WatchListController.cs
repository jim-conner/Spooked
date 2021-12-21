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
    [Route("api/watchList/")]
    [ApiController]
    public class WatchListController : ControllerBase
    {
        private WatchListRepository _repo;
        private MovieRepository _movieRepo;

        public WatchListController(WatchListRepository repo, MovieRepository movieRepo)
        {
            _repo = repo;
            _movieRepo = movieRepo;


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

        [HttpPost]
        public IActionResult AddMovieToWatchList(WatchList newWatchListMovie)
        {
            var doesMovieExistAlready = _repo.GetWatchListByUserIdMovieId(newWatchListMovie.UserId, newWatchListMovie.MovieId);

            if (newWatchListMovie.UserId == Guid.Empty 
                || newWatchListMovie.MovieId == Guid.Empty)
            {
                return BadRequest("UserId & MovieId are required.");
            }

            _repo.Add(newWatchListMovie);

            return Created($"/api/snackMood/{newWatchListMovie.Id}", newWatchListMovie);
        }
    }
}
