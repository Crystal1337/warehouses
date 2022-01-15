using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WarehousesAPI.Entities
{
    public class Cars
    {
        public int Id { get; set; }
        public string? Location { get; set; }
        public List<Vehicle>? Vehicles { get; set; }
    }
}