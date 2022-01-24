using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;
using Spooked.Models;

namespace Spooked.DataAccess
{
    public class MovieRepository : IMovieRepository
    {
        readonly string _connectionString;

        public MovieRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Spooked");
        }

        public IEnumerable<Movie> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var movies = db.Query<Movie>(@"Select * From Movie");

            return movies;
        }

        public object getMoviesByTriggerAndSubGenre(int triggerId, int subGenreId)
        {
            using var db = new SqlConnection(_connectionString);

            var moviesByTrigger = @"Select *
                                    From Movie m
                                    Where NOT EXISTS (
	                                    Select mt.imdbMovieId From Movie
	                                    INNER JOIN [MovieTrigger] mt on m.ImdbId = mt.imdbMovieId
	                                    Where mt.TriggerId = @triggerId
                                    )
                                    AND m.SubGenreId = @subGenreId";

            var filteredMovies = db.Query<Movie>(moviesByTrigger, new { triggerId = triggerId, subgenreId = subGenreId });

            return filteredMovies;
        }

        public Movie GetById(Guid Id)
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

        public object getMoviesByTrigger(int triggerId)
        {
            using var db = new SqlConnection(_connectionString);

            var moviesByTrigger = @"Select *
                                    From Movie m
                                    Where NOT EXISTS (
	                                    Select mt.imdbMovieId From Movie
	                                    INNER JOIN [MovieTrigger] mt on m.imdbId = mt.imdbMovieId
	                                    Where mt.TriggerId = @triggerId 
                                    )";

            var filteredMovies = db.Query<Movie>(moviesByTrigger, new { triggerId = triggerId });

            return filteredMovies;
        }

        public Movie GetByImdbId(string imdbId)
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

        public object ToggleWatched(Guid id, Movie movieToUpdate)
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

        public object GetBySubGenreId(int subGenreId)
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