using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;

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

            var movies = db.Query<Movie>(@"Select * From Movies");

            return movies;
        }

    }
}