using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehousesAPI.Entities;

namespace WarehousesAPI.DTOs
{
    public class CarDTO
    {
        public string? Make { get; set; }
        public string? Model { get; set; }
        public int Year { get; set; }
        public double Price { get; set; }
        public bool Licensed { get; set; }
        public string? Date_Added { get; set; }

    }
}