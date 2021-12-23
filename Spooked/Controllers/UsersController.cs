using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Spooked.DataAccess;
using Spooked.Models;

namespace Spooked.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : FireBaseController
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
            var fbIdFromClaim = FirebaseUid;

        }

        [HttpGet("id/{id}")]
        public IActionResult GetById(Guid id)
        {
            var singleUser = _repo.GetById(id);

            if (singleUser == null)
            {
                return NotFound($"No users found with UserId: {id}.");
            }

            return Ok(singleUser);
        }

        [HttpGet("fbid/{firebaseId}")]
        public IActionResult GetUserByFirebaseId(string firebaseId)
        {
            var user = _repo.GetByFirebaseId(firebaseId);

            if (user == null)
            {
                return NotFound($"No user with FirebaseId: {firebaseId}");
            }

            return Ok(user);
        }

        [HttpPost]
        public IActionResult Add(User newUser)
        {
            _repo.Add(newUser);

            return Created($"api/users/{newUser.Id}", newUser);
        }
        
       

    }
}