using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;
using WarehousesAPI.Controllers;
using WarehousesAPI.Data;
using WarehousesAPI.Entities;

namespace WarehousesAPITests
{
    public class CarsControllerTests : TestWithSqlite
    {
        [Test]
        public void Get_All_Cars()
        {
            using (var context = GetDbContext())
            {
                var controller = new CarsController(context);

                InitializeDatabase(context);
                
                var list = controller.GetCars().Result.Value;
                var count = list.Count;

                Assert.AreEqual(3, count);
            }
                
        }

        //Helper methods
        private static Car CreateCar(int id, string make, string model, int year, double price, bool licensed, string date_added)
        {
            var car = new Car{
            Id = id,
            Make = make,
            Model = model,
            Year = year,
            Price = price,
            Licensed = licensed,
            Date_Added = date_added
            };
            return car;
        }

        private static void InitializeDatabase(DataContext context)
        {
            List<Car> cars = new List<Car>();
                cars.Add(CreateCar(1, "BMW", "i328", 2014, 50000, true, "2020-01-12"));
                cars.Add(CreateCar(2, "Mercedes", "Benz", 2010, 30000, true, "2005-07-24"));
                cars.Add(CreateCar(3, "Toyota", "Corolla", 2005, 10000, false, "2017-05-18"));

                for (int i = 0; i < cars.Count; i++)
                {
                    context.Cars.Add(cars[i]);
                    
                }
                context.SaveChanges();
        }
    }
}