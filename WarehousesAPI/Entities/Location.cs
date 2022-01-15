using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WarehousesAPI.Entities
{
    public class Location
    {
        public int Id {get; set; }
        public string? lat { get; set; }
        public string? @long { get; set; }
    }
}