using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Spooked.Models
{
    public class Trigger
    {
        public Guid Id { get; set; }
        public Guid MovieId { get; set; }
        public string Name { get; set; }
    }
}
