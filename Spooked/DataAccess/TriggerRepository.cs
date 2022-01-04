using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;
using Spooked.Models;

namespace Spooked.DataAccess
{
    public class TriggerRepository
    {
        readonly string _connectionString;

        public TriggerRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Spooked");
        }

        internal IEnumerable<Trigger> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var allTriggers = db.Query<Trigger>(@"Select * From [Trigger]");

            return allTriggers;
        }

        internal IEnumerable<Trigger> GetByMovieId(Guid movieId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select * 
                        From [Trigger] 
                        Where MovieId = @movieId
                        Order By [Name] Asc";


            var movieTriggers = db.Query<Trigger>(sql, new { movieId = movieId });

            return movieTriggers;
        }

        internal int GetTotalTriggersValue(Guid movieId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select Sum([Value])
                    From [Trigger] 
                    Where MovieId = @movieId";

            var totalValue = db.ExecuteScalar<int>(sql, new { movieId = movieId });

            if (totalValue > 100)
            {
                totalValue = 100;
            }

            return totalValue;
        }
    }


}