using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using Spooked.Models;

namespace Spooked.DataAccess
{
    public class WatchListRepository
    {
        readonly string _connectionString;

        public WatchListRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Spooked");
        }

        internal IEnumerable<WatchList> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select w.*
                        From WatchList w
                        Join [User] u on u.Id = w.UserId
                        Join [Movie] m on m.Id = w.MovieId";

            var watchListMovies= db.Query<WatchList>(sql);

            return watchListMovies;
        }

        internal WatchList GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select * from WatchList where Id = @id";

            var movie = db.QuerySingleOrDefault<WatchList>(sql, new { id });

            return movie;
        }

        public void Add(WatchList newWatchListMovie)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Insert into [WatchList](UserId, MovieId)
                        Output inserted.Id
                        Values(@UserId, @MovieId)";

            var id = db.ExecuteScalar<Guid>(sql, newWatchListMovie);
            newWatchListMovie.Id = id;
        }

        internal object GetWatchListByUserIdMovieId(Guid userId, Guid movieId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select * from WatchList 
                        where UserId = @userId
                        and MovieId = @MovieId";

            var snackMood = db.QuerySingleOrDefault<WatchList>(sql, new { userId, movieId });

            return snackMood;
        }
    }
}
 