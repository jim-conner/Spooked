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
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private UserRepository _repo;

        public UsersController(UserRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("user/{id}")]
        public IActionResult GetUserById(Guid id)
        {
            var singleUser = _repo.GetById(id);

            if (singleUser == null)
            {
                return NotFound($"No users found with UserId: {id}.");
            }

            return Ok(singleUser);
        }
        
       

    }
}