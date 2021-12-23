using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Spooked.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string FirebaseId { get; set; }
    }
}
