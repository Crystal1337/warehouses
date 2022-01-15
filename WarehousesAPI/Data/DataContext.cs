using Microsoft.EntityFrameworkCore;
using WarehousesAPI.Entities;

namespace WarehousesAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        
        public DbSet<Vehicle> Vehicles {get; set; }
        public DbSet<Cars> Cars {get; set; }
        public DbSet<Location> Locations {get; set; }
        public DbSet<Warehouse> Warehouses {get; set; }
    }
}
