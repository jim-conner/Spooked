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

        [HttpGet("ometer/{movieId}")]
        public IActionResult GetTriggerValueTotal(Guid movieId)
        {
            var totalTriggerValues = _repo.GetTotalTriggersValue(movieId);

            if (totalTriggerValues < 0)
            {
                return NotFound($"Can't return negative integers for total trigger value.");
            }
            
            return Ok(totalTriggerValues);
        }

        [HttpGet("movieTriggers/{movieId}")]
        public IActionResult GetTriggersByMovieId(Guid movieId)
        {
            var singleTrigger = _repo.GetByMovieId(movieId);

            if (singleTrigger == null)
            {
                return NotFound($"No triggers found with MovieId: {movieId}.");
            }
            return Ok(singleTrigger);
        }

    }
}
