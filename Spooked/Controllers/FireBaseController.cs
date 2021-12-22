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
    public class FireBaseController : ControllerBase
    {
        public string GetFirebaseUid()
        {
            return User.FindFirst(claim => claim.Type == "user_id").Value;
        }

        public string FirebaseUid => User.FindFirst(claim => claim.Type == "user_id").Value;
    }
}
