using Microsoft.EntityFrameworkCore;
using WarehousesAPI.Entities;

namespace WarehousesAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        
        public DbSet<Car> Cars {get; set; }
    }
}
