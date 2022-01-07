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
    [Route("api/triggers")]
    [ApiController]

    public class TriggersController : ControllerBase
    {
        private TriggerRepository _repo;

        public TriggersController(TriggerRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllTriggers()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("ometer/{imdbMovieId}")]
        public IActionResult GetTriggerValueTotal(string imdbMovieId)
        {
            var totalTriggerValues = _repo.GetMovieTriggersTotalScore(imdbMovieId);

            if (totalTriggerValues < 0)
            {
                return NotFound($"Can't return negative integers for total trigger value.");
            }
            
            return Ok(totalTriggerValues);
        }

        [HttpGet("movieTriggers/{imdbMovieId}")]
        public IActionResult GetTriggersByMovieId(string imdbMovieId)
        {
            var movieTriggers = _repo.GetByMovieId(imdbMovieId);

            if (movieTriggers == null)
            {
                return NotFound($"No triggers found with MovieId: {imdbMovieId}.");
            }
            return Ok(movieTriggers);
        }

    }
}
