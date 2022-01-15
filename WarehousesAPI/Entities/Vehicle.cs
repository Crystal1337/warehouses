using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehousesAPI.DTOs;

namespace WarehousesAPI.Entities
{
    public class Vehicle
    {
        public int Id { get; set; }
        public string? Make { get; set; }
        public string? Model { get; set; }
        public int Year { get; set; }
        public double Price { get; set; }
        public bool Licensed { get; set; }
        public string? Date_Added { get; set; }

        public CarDTO toDTO()
        {
            return new CarDTO{
                Make = this.Make,
                Model = this.Model,
                Year = this.Year,
                Price = this.Price,
                Licensed = this.Licensed,
                Date_Added = this.Date_Added
            };
        }
    }
}