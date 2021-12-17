using System;
using Microsoft.Extensions.Configuration;

namespace Spooked.DataAccess
{
    public class TriggerRepository
    {
        readonly string _connectionString;

        public TriggerRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("Spooked");
        }

        internal object GetAll()
        {
            throw new NotImplementedException();

        }

        internal object GetById(object id)
        {
            throw new NotImplementedException();
        }
    }


}