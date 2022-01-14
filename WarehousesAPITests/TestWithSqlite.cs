using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using WarehousesAPI.Data;

namespace WarehousesAPITests
{
    public class TestWithSqlite
    {
        public DataContext GetDbContext()
        {
            DbContextOptionsBuilder builder = new DbContextOptionsBuilder();

            builder.UseSqlite("DataSource=:memory:", x => { });

            var dbContext = new DataContext(builder.Options);

            dbContext.Database.OpenConnection();
            dbContext.Database.EnsureCreated();

            return dbContext;
        }
        
    }
}