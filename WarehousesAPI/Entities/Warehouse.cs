using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WarehousesAPI.Entities
{
    public class Warehouse
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public Location? Location { get; set; }
        public Cars? cars { get; set; }
    }
}