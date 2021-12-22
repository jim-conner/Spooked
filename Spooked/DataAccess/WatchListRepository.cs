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

        internal IEnumerable<WatchListMovie> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var watchListSql = @"Select w.*, m.*
                                From WatchList w
                                Join [User] u on u.Id = w.UserId
                                Join [Movie] m on m.Id = w.MovieId";

            var watchListMovies = db.Query<WatchListMovie, Movie, WatchListMovie>(
                watchListSql,
                (watchListMovie, movie) =>
                {
                    watchListMovie.Movie = movie;
                    return watchListMovie;
                },
                splitOn: "Id");

            return watchListMovies;
        }

        internal WatchList GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select * From WatchList Where Id = @id";

            var movie = db.QuerySingleOrDefault<WatchList>(sql, new { id });

            return movie;
        }

        internal object GetWatchListByUserIdMovieId(Guid userId, Guid movieId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select * from WatchList 
                        where UserId = @userId
                        and MovieId = @movieId";

            var snackMood = db.QuerySingleOrDefault<WatchList>(sql, new { userId, movieId });

            return snackMood;
        }

        public void Add(WatchList newWatchListMovie)
        {
            using var db = new SqlConnection(_connectionString);

            var userSql = @"Select * from [User] 
                        where UserId = @userId
                        and MovieId = @movieId";

            var sql = @"Insert into [WatchList]( MovieId)
                        Output inserted.Id
                        Values(u.Id, @MovieId) 
                        Select u.Id as UserId From [User] u 
                        ";

            //var sql = @"Insert into [WatchList]( MovieId)
            //            Output inserted.Id
            //            Values(u.Id, @MovieId) 
            //            Select u.Id as UserId From [User] u 
            //            INNER JOIN [WatchList] w on w.UserId = u.Id
            //            ";

            var id = db.ExecuteScalar<Guid>(sql, newWatchListMovie);
            newWatchListMovie.Id = id;
        }




    }
}
 