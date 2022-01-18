using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Spooked.Models;

namespace Spooked.DataAccess
{
    interface IMovieRepository
    {
        IEnumerable<Movie> GetAll();

        object getMoviesByTriggerAndSubGenre(int triggerId, int subGenreId);

        Movie GetById(Guid Id);

        object getMoviesByTrigger(int triggerId);

        Movie GetByImdbId(string imdbId);

        object ToggleWatched(Guid id, Movie movieToUpdate);

        object GetBySubGenreId(int subGenreId);
    }
}
