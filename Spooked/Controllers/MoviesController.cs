using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Spooked.Controllers
{
    [Route("api/[controller]")]
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
    }
}
