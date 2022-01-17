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
        public void Get_All_Warehouses_Positive_Amount()
        {
            using (var context = GetDbContext())
            {
                var controller = new WarehousesController(context);

                InitializeDatabase(context);
                
                var warehousesList = controller.GetWarehouses().Result.Value;

                var warehousesCount = warehousesList.Count;

                Assert.AreEqual(3, warehousesCount);
            }       
        }

        //Tests if get function returns good amount of objects when there are 0 objects in database
        [Test]
        public void Get_All_Warehouses_Zero_Amount()
        {
            using (var context = GetDbContext())
            {
                var controller = new WarehousesController(context);
                
                var warehousesList = controller.GetWarehouses().Result.Value;
                var warehousesCount = warehousesList.Count;

                Assert.AreEqual(0, warehousesCount);
            }       
        }

        [Test]
        public void Get_All_Location_Positive_Amount()
        {
            using (var context = GetDbContext())
            {
                int locationCount = 0;
                var controller = new WarehousesController(context);

                InitializeDatabase(context);
                
                var warehousesList = controller.GetWarehouses().Result.Value;
                foreach(Warehouse warehouse in warehousesList)
                {
                    if(warehouse.Location != null)
                    {
                        locationCount++;
                    }
                }

                Assert.AreEqual(3, locationCount);
            }
        }

        [Test]
        public void Get_All_Location_Zero_Amount()
        {
            using (var context = GetDbContext())
            {
                int locationCount = 0;
                var controller = new WarehousesController(context);
                
                var warehousesList = controller.GetWarehouses().Result.Value;
                foreach(Warehouse warehouse in warehousesList)
                {
                    if(warehouse.Location != null)
                    {
                        locationCount++;
                    }
                }

                Assert.AreEqual(0, locationCount);
            }
        }

        [Test]
        public void Get_All_Cars_Positive_Amount()
        {
            using (var context = GetDbContext())
            {
                int carsCount = 0;
                var controller = new WarehousesController(context);

                InitializeDatabase(context);
                
                var warehousesList = controller.GetWarehouses().Result.Value;
                foreach(Warehouse warehouse in warehousesList)
                {
                    if(warehouse.cars != null)
                    {
                        carsCount++;
                    }
                }

                Assert.AreEqual(3, carsCount);
            }
        }

        [Test]
        public void Get_All_Cars_Zero_Amount()
        {
            using (var context = GetDbContext())
            {
                int carsCount = 0;
                var controller = new WarehousesController(context);
                
                var warehousesList = controller.GetWarehouses().Result.Value;
                foreach(Warehouse warehouse in warehousesList)
                {
                    if(warehouse.cars != null)
                    {
                        carsCount++;
                    }
                }

                Assert.AreEqual(0, carsCount);
            }
        }

        [Test]
        public void Get_All_Vehicles_Positive_Amount()
        {
            using (var context = GetDbContext())
            {
                int vehiclesCount = 0;
                var controller = new WarehousesController(context);

                InitializeDatabase(context);
                
                var warehousesList = controller.GetWarehouses().Result.Value;
                foreach(Warehouse warehouse in warehousesList)
                {
                    vehiclesCount += warehouse.cars.Vehicles.Count;
                }

                Assert.AreEqual(9, vehiclesCount);
            }
        }

        [Test]
        public void Get_All_Vehicles_Zero_Amount()
        {
            using (var context = GetDbContext())
            {
                int vehiclesCount = 0;
                var controller = new WarehousesController(context);
                
                var warehousesList = controller.GetWarehouses().Result.Value;
                foreach(Warehouse warehouse in warehousesList)
                {
                    vehiclesCount += warehouse.cars.Vehicles.Count;
                }

                Assert.AreEqual(0, vehiclesCount);
            }
        }

        //Tests if toDTO function returns the same object as normal DTO constructor
        [Test]
        public void Cars_To_DTO_Conversion()
        {
            using (var context = GetDbContext())
            {
                VehicleDTO testCarToDTO = CreateVehicle(1, "BMW", "i328", 2014, 50000, true, "2020-01-12").toDTO();
                VehicleDTO testCarDTO = CreateCarDTO(1, "BMW", "i328", 2014, 50000, true, "2020-01-12");

                var testCarToDtoJSON = JsonConvert.SerializeObject(testCarToDTO);
                var testCarDtoJSON = JsonConvert.SerializeObject(testCarDTO);

                Assert.AreEqual(testCarToDtoJSON, testCarDtoJSON);
            }       
        }

        //Helper methods
        private static Location CreateLocation(int id, string lat, string @long)
        {
            Location location = new Location{
                Id = id,
                lat = lat,
                @long = @long
            };
            return location;
        }

        private static Cars CreateCars(int id, string location, List<Vehicle> vehicles)
        {
            Cars cars = new Cars{
                Id = id,
                Location = location,
                Vehicles = vehicles
            };
            return cars;
        }

        private static Warehouse CreateWarehouse(int id, string name, Location location, Cars Cars)
        {
            Warehouse warehouse = new Warehouse{
                Id = id,
                Name = name,
                Location = location,
                cars = Cars
            };

            return warehouse;
        }

        private static Vehicle CreateVehicle(int id, string make, string model, int year, double price, bool licensed, string date_added)
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

        private static VehicleDTO CreateCarDTO(int id, string make, string model, int year, double price, bool licensed, string date_added)
        {
            VehicleDTO carDTO = new VehicleDTO{
            Id = id,
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
            Location location1 = CreateLocation(1, "47.13111", "-61.54801");
            List<Vehicle> vehicles1 = new List<Vehicle>(){
                CreateVehicle(1, "BMW", "i328", 2014, 50000, true, "2020-01-12"),
                CreateVehicle(2, "Mercedes", "Benz", 2010, 30000, true, "2005-07-24"),
                CreateVehicle(3, "Toyota", "Corolla", 2005, 10000, false, "2017-05-18")
            };
            Cars cars1 = CreateCars(1, "West wing", vehicles1);
            Warehouse warehouse1 = CreateWarehouse(1, "Warehouse A", location1, cars1);

            Location location2 = CreateLocation(2, "47.13111", "-61.54801");
            List<Vehicle> vehicles2 = new List<Vehicle>(){
                CreateVehicle(4, "BMW", "i328", 2014, 50000, true, "2020-01-12"),
                CreateVehicle(5, "Mercedes", "Benz", 2010, 30000, true, "2005-07-24"),
                CreateVehicle(6, "Toyota", "Corolla", 2005, 10000, false, "2017-05-18")
            };
            Cars cars2 = CreateCars(2, "West wing", vehicles1);
            Warehouse warehouse2 = CreateWarehouse(2, "Warehouse A", location1, cars1);

            Location location3 = CreateLocation(3, "47.13111", "-61.54801");
            List<Vehicle> vehicles3 = new List<Vehicle>(){
                CreateVehicle(7, "BMW", "i328", 2014, 50000, true, "2020-01-12"),
                CreateVehicle(8, "Mercedes", "Benz", 2010, 30000, true, "2005-07-24"),
                CreateVehicle(9, "Toyota", "Corolla", 2005, 10000, false, "2017-05-18")
            };
            Cars cars3 = CreateCars(3, "West wing", vehicles1);
            Warehouse warehouse3 = CreateWarehouse(3, "Warehouse A", location1, cars1);

            context.Locations.AddRange(location1, location2, location3);
            context.Vehicles.AddRange(vehicles1);
            context.Vehicles.AddRange(vehicles2);
            context.Vehicles.AddRange(vehicles3);
            context.Cars.AddRange(cars1, cars2, cars3);
            context.Warehouses.AddRange(warehouse1, warehouse2, warehouse3);
            

            context.SaveChanges();
        }
    }
}