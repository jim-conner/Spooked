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

        internal object GetBySubGenreId(int subGenreId)
        {
            using var db = new SqlConnection(_connectionString);

                var movieSql = @"Select *
                                From Movie
                                Where SubGenreId = @subGenreId";
                
                var singleMovie = db.QuerySingleOrDefault<Movie>(movieSql, new { subGenreId = subGenreId });
                return singleMovie;

        }
    }
}