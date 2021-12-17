using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spooked.DataAccess;

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

        [HttpGet("trigger/{id}")]
        public IActionResult GetTriggersById(id)
        {
            var singleTrigger = _repo.GetById(id);

            if (singleTrigger == null)
            {
                return NotFound($"No movie found with MovieId: {id}.");
            }
            return Ok(singleTrigger);
        }

    }
}
