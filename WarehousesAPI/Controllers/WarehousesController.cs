using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using WarehousesAPI.Attributes;
using WarehousesAPI.Data;
using WarehousesAPI.DTOs;
using WarehousesAPI.Entities;
using System.IO;

namespace WarehousesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WarehousesController : Controller
    {
        private readonly DataContext _context;
        public WarehousesController(DataContext context)
        {
            _context = context;
        }
        // [ApiKeyAuth]
        [HttpGet]
        public async Task<ActionResult<List<Warehouse>>> GetWarehouses()
        {
            return await _context.Warehouses
            .Include(e => e.cars)
            .Include(e => e.Location) 
            .Include(e => e.cars.Vehicles)
            .ToListAsync();

            // return await _context.Warehouses 
            // .Include(e=> e.cars)
            // .Include(e => e.Location) 
            // .Include(e => e.cars.Vehicles)
            // .Where(e=> e.cars.Vehicles.Any(e=> e.Id == 1)).ToListAsync();
        }

        //helper function - not needed in final project
        
        [Route("jsonFillTables")]
        [HttpGet]
        public void FillTablesFromJSON()
        {
            //get deserialized objects from json file
            var JSONString = System.IO.File.ReadAllText("Data/JSON/warehouses.json");
            List<Warehouse> listOfWarehouses = JsonConvert.DeserializeObject<List<Warehouse>>(JSONString);

            //fill database with data from json (omitting data that's already in tables)
            for(int i = 0; i < listOfWarehouses.Count; i++)
            {
                if(!_context.Warehouses.Any(e => e.Id == listOfWarehouses[i].Id))
                {
                    _context.Warehouses.Add(listOfWarehouses[i]);

                    if(!_context.Warehouses.Any(e => e.Id == listOfWarehouses[i].Location.Id))
                    {
                        _context.Locations.Add(listOfWarehouses[i].Location);
                    }

                    if(!_context.Warehouses.Any(e => e.Id == listOfWarehouses[i].cars.Id))
                    {
                        _context.Cars.Add(listOfWarehouses[i].cars);
                    }

                    for(int y = 0; y < listOfWarehouses[i].cars.Vehicles.Count; y++)
                    {
                        _context.Vehicles.Add(listOfWarehouses[i].cars.Vehicles[y]);
                    }
                }    

                _context.SaveChanges(); 
            }

            return;
        }
    }
}