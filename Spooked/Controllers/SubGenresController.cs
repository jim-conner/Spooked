using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spooked.DataAccess;


namespace Spooked.Controllers
{
    [Route("api/subGenres")]
    [ApiController]
    public class SubGenresController : ControllerBase
    {
        private SubGenreRepository _repo;

        public SubGenresController(SubGenreRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllSubGenres()
        {
            return Ok(_repo.GetAll());
        }
    }
}
