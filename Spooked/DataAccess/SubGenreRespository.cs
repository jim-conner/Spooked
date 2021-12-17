using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;
using Spooked.Models;

namespace Spooked.DataAccess
{
    public class SubGenreRepository
    {
        readonly string _connectionString;

        public SubGenreRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Spooked");
        }

        internal IEnumerable<SubGenre> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var movies = db.Query<SubGenre>(@"Select * From SubGenre");

            return movies;
        }

    }
}