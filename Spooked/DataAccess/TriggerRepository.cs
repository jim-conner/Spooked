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

        internal IEnumerable<Trigger> GetByImdbMovieId(string imdbMovieId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select t.*
                        From[Trigger] t
                            Join MovieTrigger mt on t.Id = mt.TriggerId
                        Where mt.ImdbMovieId = @imdbMovieId
                        Order By t.Id Asc";

            var movieTriggers = db.Query<Trigger>(sql, new { imdbMovieId = imdbMovieId });

            return movieTriggers;
        }

        internal int GetMovieTriggersTotalScore(string imdbMovieId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select Sum([Score])
                        From [MovieTrigger] 
                        Where ImdbMovieId = @imdbMovieId";

            var totalValue = db.ExecuteScalar<int>(sql, new { imdbMovieId = imdbMovieId });

            if (totalValue > 100)
            {
                totalValue = 100;
            }

            return totalValue;
        }
    }


}