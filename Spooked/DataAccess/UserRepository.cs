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

        internal User GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From [User]
                        Where Id = @id";

            var singleUser = db.QueryFirstOrDefault<User>(sql, new { Id = id });

            return singleUser;
        }

        internal User GetByFirebaseId(string firebaseId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From [User]
                        Where FirebaseId = @firebaseId";

            var user = db.QuerySingleOrDefault<User>(sql, new { firebaseId });

            return user;
        }

    internal void Add(User newUser)
        {
            using var db = new SqlConnection(_connectionString);

            var userSql = @"Insert into [User] 
                                (FirebaseId)
                             Output inserted.Id
                            Values 
                                (@FirebaseId)";

            var userId = db.ExecuteScalar<Guid>(userSql, newUser);

            newUser.Id = userId;
        }

    }
}