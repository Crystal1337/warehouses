using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NUnit.Framework;
using WarehousesAPI.Controllers;
using WarehousesAPI.Data;
using WarehousesAPI.DTOs;
using WarehousesAPI.Entities;

namespace WarehousesAPITests
{
    public class CarsControllerTests : TestWithSqlite
    {
        //Tests if get function returns good amount of objects when there are at least 1 object in database
        [Test]
        public void Get_All_Cars_Positive_Amount()
        {
            using (var context = GetDbContext())
            {
                var controller = new VehiclesController(context);

                InitializeDatabase(context);
                
                var list = controller.GetCars().Result.Value;
                var count = list.Count;

                Assert.AreEqual(3, count);
            }       
        }

        //Tests if get function returns good amount of objects when there are 0 objects in database
        [Test]
        public void Get_All_Cars_Zero_Amount()
        {
            using (var context = GetDbContext())
            {
                var controller = new VehiclesController(context);
                
                var list = controller.GetCars().Result.Value;
                var count = list.Count;

                Assert.AreEqual(0, count);
            }       
        }

        //Tests if toDTO function returns the same object as normal DTO constructor
        [Test]
        public void Cars_To_DTO_Conversion()
        {
            using (var context = GetDbContext())
            {
                CarDTO testCarToDTO = CreateCar(1, "BMW", "i328", 2014, 50000, true, "2020-01-12").toDTO();
                CarDTO testCarDTO = CreateCarDTO("BMW", "i328", 2014, 50000, true, "2020-01-12");

                var testCarToDtoJSON = JsonConvert.SerializeObject(testCarToDTO);
                var testCarDtoJSON = JsonConvert.SerializeObject(testCarDTO);

                Assert.AreEqual(testCarToDtoJSON, testCarDtoJSON);
            }       
        }

        //Helper methods
        private static Vehicle CreateCar(int id, string make, string model, int year, double price, bool licensed, string date_added)
        {
            Vehicle car = new Vehicle{
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

        private static CarDTO CreateCarDTO(string make, string model, int year, double price, bool licensed, string date_added)
        {
            CarDTO carDTO = new CarDTO{
            Make = make,
            Model = model,
            Year = year,
            Price = price,
            Licensed = licensed,
            Date_Added = date_added
            };
            return carDTO;
        }

        private static void InitializeDatabase(DataContext context)
        {
            List<Vehicle> cars = new List<Vehicle>(){
                CreateCar(1, "BMW", "i328", 2014, 50000, true, "2020-01-12"),
                CreateCar(2, "Mercedes", "Benz", 2010, 30000, true, "2005-07-24"),
                CreateCar(3, "Toyota", "Corolla", 2005, 10000, false, "2017-05-18")
            };
                
            context.Vehicles.AddRange(cars);

            context.SaveChanges();
        }
    }
}