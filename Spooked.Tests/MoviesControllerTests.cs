using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Spooked.Controllers;
using Spooked.DataAccess;
using Spooked.Models;
using Xunit;

namespace Spooked.Tests
{
    public class MoviesControllerTests
    {
        [Fact]
        public void requesting_specific_movie_returns_correct_movie()
        {
            //IConfiguration config = new IMovieRepository;
            //var repo = new MovieRepository();

            //Arrange
            var controller = new MoviesController( new TestMovieRepository());

            //Act
            //var result = controller.GetAllMovies();


            //Assert
            //Assert.Equal(1, result.);
        }
    }

    public class TestMovieRepository : IMovieRepository
    {
        IEnumerable<Movie> IMovieRepository.GetAll()
        {
            //return new IEnumerable<Movie> { new Movie() };
            throw new NotImplementedException();

        }

        object IMovieRepository.getMoviesByTriggerAndSubGenre(int triggerId, int subGenreId)
        {
            throw new NotImplementedException();
        }

        Movie IMovieRepository.GetById(Guid Id)
        {
            throw new NotImplementedException();
        }

        object IMovieRepository.getMoviesByTrigger(int triggerId)
        {
            throw new NotImplementedException();
        }

        Movie IMovieRepository.GetByImdbId(string imdbId)
        {
            throw new NotImplementedException();
        }

        object IMovieRepository.ToggleWatched(Guid id, Movie movieToUpdate)
        {
            throw new NotImplementedException();
        }

        object IMovieRepository.GetBySubGenreId(int subGenreId)
        {
            throw new NotImplementedException();
        }
    }
}
