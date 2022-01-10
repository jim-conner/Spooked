using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Spooked.Models
{
    public class MovieTrigger
    {
        public Guid Id { get; set; }
        public string ImdbMovieId { get; set; }
        public int TriggerId { get; set; }
        public int Score { get; set; }
    }
}
