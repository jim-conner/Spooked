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

        internal WatchList GetByMovieId(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select * From WatchList Where MovieId = @id";

            var movie = db.QuerySingleOrDefault<WatchList>(sql, new { id });

            return movie;
        }

        internal object GetWatchListByUserIdMovieId(Guid userId, Guid movieId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select * from WatchList 
                        Where UserId = @userId
                        and MovieId = @movieId";

            var watchListMovie = db.QuerySingleOrDefault<WatchList>(sql, new { userId, movieId });

            return watchListMovie;
        }

        public void Add(WatchList newWatchListMovie)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Insert into [WatchList]( UserId, MovieId)
                        Output inserted.Id
                        Values(@UserId, @MovieId)";

            var id = db.ExecuteScalar<Guid>(sql, newWatchListMovie);
            newWatchListMovie.Id = id;

        }

        public void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Delete From WatchList 
                        Where Id = @id";

            db.Execute(sql, new { id });
        }




    }
}
 