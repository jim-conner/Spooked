using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;
using Spooked.Models;

namespace Spooked.DataAccess
{
    public class MovieRepository
    {
        readonly string _connectionString;

        public MovieRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Spooked");
        }

        internal IEnumerable<Movie> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var movies = db.Query<Movie>(@"Select * From Movie");

            return movies;
        }

        internal object getMoviesByTriggerAndSubGenre(Guid triggerId, int subGenreId)
        {
            using var db = new SqlConnection(_connectionString);

            var moviesByTrigger = @"Select *
                                    From Movie m
                                    Where NOT EXISTS (
	                                    Select t.Id From Movie
	                                    INNER JOIN [Trigger] t on m.Id = t.MovieId
	                                    Where t.Id = @triggerId 
                                    )
                                    AND m.SubGenreId = @subgenreId";

            var filteredMovies = db.Query<Movie>(moviesByTrigger, new { triggerId = triggerId, subgenreId = subGenreId });

            return filteredMovies;
        }

        internal Movie GetById(Guid Id)
        {
            using var db = new SqlConnection(_connectionString);
            {
                var movieSql = @"Select *
                                From Movie
                                Where Id = @Id";

                var singleMovie = db.QuerySingleOrDefault<Movie>(movieSql, new { Id = Id });
                return singleMovie;
            }
        }

        internal object getMoviesByTrigger(Guid triggerId)
        {
            using var db = new SqlConnection(_connectionString);

            var moviesByTrigger = @"Select *
                                    From Movie m
                                    Where NOT EXISTS (
	                                    Select t.Id From Movie
	                                    INNER JOIN [Trigger] t on m.Id = t.MovieId
	                                    Where t.Id = @triggerId 
                                    )";

            var filteredMovies = db.Query<Movie>(moviesByTrigger, new { triggerId = triggerId });

            return filteredMovies;
        }

        internal Movie GetByImdbId(string imdbId)
        {
            using var db = new SqlConnection(_connectionString);
            {
                var movieSql = @"Select *
                                From Movie
                                Where ImdbId = @imdbId";

                var singleMovie = db.QuerySingleOrDefault<Movie>(movieSql, new { imdbId = imdbId });

                return singleMovie;
            }
        }

        internal object ToggleWatched(Guid id, Movie movieToUpdate)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Update Movie
                        Set 
	                        ImdbId = @imdbId, 
	                        Title = @title, 
	                        SubGenreId = @subGenreId, 
	                        Watched = @watched,
	                        Poster = @poster
                        Output inserted.*
                        Where id = @id";

            movieToUpdate.Id = id;
            var updatedMovieToUpdate = db.QuerySingleOrDefault<Movie>(sql, movieToUpdate);

            return updatedMovieToUpdate;
        }

        internal object GetBySubGenreId(int subGenreId)
        {
            using var db = new SqlConnection(_connectionString);

                var movieSql = @"Select *
                                From Movie
                                Where SubGenreId = @subGenreId";
                
                var filteredMovies = db.Query<Movie>(movieSql, new { subGenreId = subGenreId });



                return filteredMovies;

        }
    }
}