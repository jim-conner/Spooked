using Microsoft.Extensions.Configuration;

namespace Spooked.DataAccess
{
    public class UserRespository
    {
        readonly string _connectionString;

        public UserRespository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Spooked");


        }

    }
}