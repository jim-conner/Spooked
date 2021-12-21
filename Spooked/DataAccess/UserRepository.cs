using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Spooked.Models;
using Dapper;
using System;

namespace Spooked.DataAccess
{
    public class UserRepository
    {
        readonly string _connectionString;

        public UserRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Spooked");
        }

        internal IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var allTriggers = db.Query<User>(@"Select * From [User]");

            return allTriggers;
        }

        internal User GetById(Guid Id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From [User]
                        Where Id = @Id";

            var singleUser = db.QueryFirstOrDefault<User>(sql, new { Id = Id });

            return singleUser;
        }

    }
}