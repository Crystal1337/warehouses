using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WarehousesAPI.Attributes;
using WarehousesAPI.Data;
using WarehousesAPI.DTOs;

namespace WarehousesAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarsController : Controller
    {
        private readonly DataContext _context;
        public CarsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<CarDTO>>> GetCars()
        {
            return await _context.Cars.Select(e => e.toDTO()).ToListAsync();
        }
    }
}