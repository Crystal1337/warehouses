import { Warehouse } from '../models/Warehouse';
import { VehicleService } from './vehicle.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';

describe('VehicleService', () => {
  let service: VehicleService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  
  const warehouses = [
    {
        "id": 1,
        "name": "Warehouse A",
        "location": {
            "id": 1,
            "lat": "47.13111",
            "long": "-61.54801"
        },
        "cars": {
            "id": 1,
            "location": "West wing",
            "vehicles": [
                {
                    "id": 1,
                    "make": "Volkswagen",
                    "model": "Jetta III",
                    "year": 1995,
                    "price": 12947.52,
                    "licensed": true,
                    "date_Added": "2018-09-18"
                },
                {
                    "id": 2,
                    "make": "Chevrolet",
                    "model": "Corvette",
                    "year": 2004,
                    "price": 20019.64,
                    "licensed": true,
                    "date_Added": "2018-01-27"
                },
                {
                    "id": 3,
                    "make": "Ford",
                    "model": "Expedition EL",
                    "year": 2008,
                    "price": 27323.42,
                    "licensed": false,
                    "date_Added": "2018-07-03"
                },
                {
                    "id": 4,
                    "make": "Infiniti",
                    "model": "FX",
                    "year": 2010,
                    "price": 8541.62,
                    "licensed": true,
                    "date_Added": "2018-03-23"
                },
                {
                    "id": 5,
                    "make": "GMC",
                    "model": "Safari",
                    "year": 1998,
                    "price": 14772.5,
                    "licensed": false,
                    "date_Added": "2018-07-04"
                },
                {
                    "id": 6,
                    "make": "Plymouth",
                    "model": "Colt Vista",
                    "year": 1994,
                    "price": 6642.45,
                    "licensed": true,
                    "date_Added": "2018-07-11"
                },
                {
                    "id": 7,
                    "make": "Cadillac",
                    "model": "Escalade ESV",
                    "year": 2008,
                    "price": 24925.75,
                    "licensed": false,
                    "date_Added": "2018-01-29"
                },
                {
                    "id": 8,
                    "make": "Mitsubishi",
                    "model": "Pajero",
                    "year": 2002,
                    "price": 28619.45,
                    "licensed": false,
                    "date_Added": "2018-06-12"
                },
                {
                    "id": 9,
                    "make": "Infiniti",
                    "model": "Q",
                    "year": 1995,
                    "price": 6103.4,
                    "licensed": false,
                    "date_Added": "2017-11-13"
                },
                {
                    "id": 10,
                    "make": "Ford",
                    "model": "Mustang",
                    "year": 1993,
                    "price": 18992.7,
                    "licensed": false,
                    "date_Added": "2018-01-29"
                },
                {
                    "id": 11,
                    "make": "Chevrolet",
                    "model": "G-Series 1500",
                    "year": 1997,
                    "price": 23362.41,
                    "licensed": false,
                    "date_Added": "2018-07-30"
                },
                {
                    "id": 12,
                    "make": "Cadillac",
                    "model": "DeVille",
                    "year": 1993,
                    "price": 18371.53,
                    "licensed": false,
                    "date_Added": "2018-01-24"
                },
                {
                    "id": 13,
                    "make": "Acura",
                    "model": "NSX",
                    "year": 2001,
                    "price": 23175.76,
                    "licensed": false,
                    "date_Added": "2018-03-28"
                },
                {
                    "id": 14,
                    "make": "Ford",
                    "model": "Econoline E250",
                    "year": 1994,
                    "price": 26605.54,
                    "licensed": true,
                    "date_Added": "2018-05-13"
                },
                {
                    "id": 15,
                    "make": "Lexus",
                    "model": "GX",
                    "year": 2005,
                    "price": 27395.26,
                    "licensed": false,
                    "date_Added": "2017-11-12"
                },
                {
                    "id": 16,
                    "make": "Dodge",
                    "model": "Ram Van 3500",
                    "year": 1999,
                    "price": 6244.51,
                    "licensed": true,
                    "date_Added": "2018-09-28"
                },
                {
                    "id": 17,
                    "make": "Dodge",
                    "model": "Caravan",
                    "year": 1995,
                    "price": 16145.27,
                    "licensed": false,
                    "date_Added": "2017-11-25"
                },
                {
                    "id": 18,
                    "make": "Dodge",
                    "model": "Dynasty",
                    "year": 1992,
                    "price": 15103.84,
                    "licensed": true,
                    "date_Added": "2018-08-12"
                },
                {
                    "id": 19,
                    "make": "Dodge",
                    "model": "Ram 1500",
                    "year": 2004,
                    "price": 9977.65,
                    "licensed": true,
                    "date_Added": "2018-01-18"
                }
            ]
        }
    },
    {
        "id": 2,
        "name": "Warehouse B",
        "location": {
            "id": 2,
            "lat": "15.95386",
            "long": "7.06246"
        },
        "cars": {
            "id": 2,
            "location": "East wing",
            "vehicles": [
                {
                    "id": 20,
                    "make": "Maserati",
                    "model": "Coupe",
                    "year": 2005,
                    "price": 19957.71,
                    "licensed": false,
                    "date_Added": "2017-11-14"
                },
                {
                    "id": 21,
                    "make": "Isuzu",
                    "model": "Rodeo",
                    "year": 1998,
                    "price": 6303.99,
                    "licensed": false,
                    "date_Added": "2017-12-03"
                },
                {
                    "id": 22,
                    "make": "Infiniti",
                    "model": "I",
                    "year": 2002,
                    "price": 6910.16,
                    "licensed": false,
                    "date_Added": "2017-10-15"
                },
                {
                    "id": 23,
                    "make": "Nissan",
                    "model": "Altima",
                    "year": 1994,
                    "price": 8252.66,
                    "licensed": false,
                    "date_Added": "2018-08-12"
                },
                {
                    "id": 24,
                    "make": "Toyota",
                    "model": "Corolla",
                    "year": 2009,
                    "price": 23732.11,
                    "licensed": false,
                    "date_Added": "2018-02-13"
                },
                {
                    "id": 25,
                    "make": "Acura",
                    "model": "MDX",
                    "year": 2011,
                    "price": 8487.19,
                    "licensed": false,
                    "date_Added": "2018-04-18"
                },
                {
                    "id": 26,
                    "make": "BMW",
                    "model": "7 Series",
                    "year": 1998,
                    "price": 29069.52,
                    "licensed": false,
                    "date_Added": "2017-10-29"
                },
                {
                    "id": 27,
                    "make": "Nissan",
                    "model": "Maxima",
                    "year": 2004,
                    "price": 11187.68,
                    "licensed": false,
                    "date_Added": "2018-07-16"
                },
                {
                    "id": 28,
                    "make": "Audi",
                    "model": "A8",
                    "year": 1999,
                    "price": 16047.9,
                    "licensed": false,
                    "date_Added": "2017-12-05"
                },
                {
                    "id": 29,
                    "make": "Nissan",
                    "model": "Murano",
                    "year": 2005,
                    "price": 25859.78,
                    "licensed": false,
                    "date_Added": "2018-06-06"
                },
                {
                    "id": 30,
                    "make": "Acura",
                    "model": "RL",
                    "year": 2010,
                    "price": 13232.13,
                    "licensed": true,
                    "date_Added": "2017-12-16"
                },
                {
                    "id": 31,
                    "make": "Mitsubishi",
                    "model": "Chariot",
                    "year": 1987,
                    "price": 15665.23,
                    "licensed": false,
                    "date_Added": "2018-02-21"
                },
                {
                    "id": 32,
                    "make": "GMC",
                    "model": "3500 Club Coupe",
                    "year": 1992,
                    "price": 18129.37,
                    "licensed": true,
                    "date_Added": "2018-09-23"
                },
                {
                    "id": 33,
                    "make": "Dodge",
                    "model": "Dakota",
                    "year": 2009,
                    "price": 14479.37,
                    "licensed": false,
                    "date_Added": "2017-12-12"
                },
                {
                    "id": 34,
                    "make": "Mercury",
                    "model": "Grand Marquis",
                    "year": 1996,
                    "price": 20614.72,
                    "licensed": false,
                    "date_Added": "2018-05-26"
                },
                {
                    "id": 35,
                    "make": "Kia",
                    "model": "Sportage",
                    "year": 2001,
                    "price": 27106.47,
                    "licensed": false,
                    "date_Added": "2018-03-14"
                },
                {
                    "id": 36,
                    "make": "Chevrolet",
                    "model": "Blazer",
                    "year": 1994,
                    "price": 14835.48,
                    "licensed": false,
                    "date_Added": "2017-11-10"
                },
                {
                    "id": 37,
                    "make": "Mercedes-Benz",
                    "model": "SL-Class",
                    "year": 1994,
                    "price": 27717.28,
                    "licensed": false,
                    "date_Added": "2018-08-17"
                },
                {
                    "id": 38,
                    "make": "Honda",
                    "model": "Civic Si",
                    "year": 2003,
                    "price": 18569.86,
                    "licensed": true,
                    "date_Added": "2018-09-12"
                },
                {
                    "id": 39,
                    "make": "Mercedes-Benz",
                    "model": "CL-Class",
                    "year": 2002,
                    "price": 23494.78,
                    "licensed": true,
                    "date_Added": "2018-05-24"
                },
                {
                    "id": 40,
                    "make": "Volkswagen",
                    "model": "Jetta",
                    "year": 2006,
                    "price": 25469.49,
                    "licensed": false,
                    "date_Added": "2018-04-23"
                },
                {
                    "id": 41,
                    "make": "Pontiac",
                    "model": "Grand Prix",
                    "year": 1975,
                    "price": 11600.74,
                    "licensed": true,
                    "date_Added": "2018-01-14"
                },
                {
                    "id": 42,
                    "make": "Infiniti",
                    "model": "FX",
                    "year": 2012,
                    "price": 22000.62,
                    "licensed": true,
                    "date_Added": "2018-06-09"
                },
                {
                    "id": 43,
                    "make": "Jaguar",
                    "model": "XK",
                    "year": 2006,
                    "price": 10260.79,
                    "licensed": true,
                    "date_Added": "2018-09-28"
                },
                {
                    "id": 44,
                    "make": "Cadillac",
                    "model": "STS",
                    "year": 2007,
                    "price": 13740.2,
                    "licensed": false,
                    "date_Added": "2018-02-25"
                },
                {
                    "id": 45,
                    "make": "Pontiac",
                    "model": "Sunfire",
                    "year": 1997,
                    "price": 28489.1,
                    "licensed": false,
                    "date_Added": "2017-12-05"
                },
                {
                    "id": 46,
                    "make": "Cadillac",
                    "model": "SRX",
                    "year": 2004,
                    "price": 26750.38,
                    "licensed": true,
                    "date_Added": "2018-08-07"
                },
                {
                    "id": 47,
                    "make": "Land Rover",
                    "model": "Freelander",
                    "year": 2004,
                    "price": 21770.59,
                    "licensed": false,
                    "date_Added": "2018-09-01"
                },
                {
                    "id": 48,
                    "make": "Suzuki",
                    "model": "Forenza",
                    "year": 2005,
                    "price": 28834.26,
                    "licensed": false,
                    "date_Added": "2018-05-09"
                },
                {
                    "id": 49,
                    "make": "Saab",
                    "model": "9-7X",
                    "year": 2005,
                    "price": 25975.68,
                    "licensed": false,
                    "date_Added": "2018-06-07"
                },
                {
                    "id": 50,
                    "make": "Ford",
                    "model": "Fusion",
                    "year": 2012,
                    "price": 28091.96,
                    "licensed": false,
                    "date_Added": "2018-07-15"
                }
            ]
        }
    },
    {
        "id": 3,
        "name": "Warehouse C",
        "location": {
            "id": 3,
            "lat": "39.12788",
            "long": "-2.71398"
        },
        "cars": {
            "id": 3,
            "location": "Suid wing",
            "vehicles": [
                {
                    "id": 51,
                    "make": "Cadillac",
                    "model": "Escalade",
                    "year": 2005,
                    "price": 7429.18,
                    "licensed": true,
                    "date_Added": "2018-09-26"
                },
                {
                    "id": 52,
                    "make": "Porsche",
                    "model": "Cayenne",
                    "year": 2011,
                    "price": 17066.31,
                    "licensed": true,
                    "date_Added": "2017-10-19"
                },
                {
                    "id": 53,
                    "make": "Mercedes-Benz",
                    "model": "SL-Class",
                    "year": 2005,
                    "price": 14066.06,
                    "licensed": false,
                    "date_Added": "2018-08-08"
                },
                {
                    "id": 54,
                    "make": "Mitsubishi",
                    "model": "RVR",
                    "year": 1995,
                    "price": 22560.18,
                    "licensed": false,
                    "date_Added": "2018-05-25"
                },
                {
                    "id": 55,
                    "make": "Volvo",
                    "model": "850",
                    "year": 1995,
                    "price": 25762.08,
                    "licensed": true,
                    "date_Added": "2017-10-03"
                },
                {
                    "id": 56,
                    "make": "Honda",
                    "model": "del Sol",
                    "year": 1994,
                    "price": 18840.96,
                    "licensed": true,
                    "date_Added": "2017-11-25"
                },
                {
                    "id": 57,
                    "make": "Infiniti",
                    "model": "Q",
                    "year": 1996,
                    "price": 28773.14,
                    "licensed": true,
                    "date_Added": "2018-08-09"
                },
                {
                    "id": 58,
                    "make": "Mercedes-Benz",
                    "model": "500E",
                    "year": 1992,
                    "price": 17141.08,
                    "licensed": true,
                    "date_Added": "2018-08-13"
                },
                {
                    "id": 59,
                    "make": "GMC",
                    "model": "Envoy XL",
                    "year": 2002,
                    "price": 18983.52,
                    "licensed": true,
                    "date_Added": "2018-03-14"
                },
                {
                    "id": 60,
                    "make": "Volkswagen",
                    "model": "Touareg 2",
                    "year": 2008,
                    "price": 15611.22,
                    "licensed": true,
                    "date_Added": "2018-02-22"
                }
            ]
        }
    },
    {
        "id": 4,
        "name": "Warehouse D",
        "location": {
            "id": 4,
            "lat": "-70.84354",
            "long": "132.22345"
        },
        "cars": {
            "id": 4,
            "location": "Suid wing",
            "vehicles": [
                {
                    "id": 61,
                    "make": "Saab",
                    "model": "900",
                    "year": 1987,
                    "price": 8771,
                    "licensed": false,
                    "date_Added": "2017-12-01"
                },
                {
                    "id": 62,
                    "make": "Mazda",
                    "model": "B-Series",
                    "year": 1998,
                    "price": 23407.59,
                    "licensed": false,
                    "date_Added": "2018-03-01"
                },
                {
                    "id": 63,
                    "make": "GMC",
                    "model": "Sierra 3500",
                    "year": 2012,
                    "price": 5869.23,
                    "licensed": true,
                    "date_Added": "2018-04-27"
                },
                {
                    "id": 64,
                    "make": "Chevrolet",
                    "model": "Corvette",
                    "year": 1964,
                    "price": 16630.67,
                    "licensed": true,
                    "date_Added": "2018-05-31"
                },
                {
                    "id": 65,
                    "make": "Toyota",
                    "model": "Tacoma",
                    "year": 1997,
                    "price": 11597.18,
                    "licensed": false,
                    "date_Added": "2018-03-30"
                },
                {
                    "id": 66,
                    "make": "GMC",
                    "model": "Sonoma",
                    "year": 2004,
                    "price": 18248.21,
                    "licensed": false,
                    "date_Added": "2018-03-09"
                },
                {
                    "id": 67,
                    "make": "Bugatti",
                    "model": "Veyron",
                    "year": 2009,
                    "price": 8051.64,
                    "licensed": false,
                    "date_Added": "2018-01-10"
                },
                {
                    "id": 68,
                    "make": "Dodge",
                    "model": "Ram 1500 Club",
                    "year": 1996,
                    "price": 14008.3,
                    "licensed": false,
                    "date_Added": "2018-05-01"
                },
                {
                    "id": 69,
                    "make": "Land Rover",
                    "model": "Discovery Series II",
                    "year": 2001,
                    "price": 18620.19,
                    "licensed": false,
                    "date_Added": "2018-03-03"
                },
                {
                    "id": 70,
                    "make": "Volvo",
                    "model": "960",
                    "year": 1993,
                    "price": 7316.93,
                    "licensed": true,
                    "date_Added": "2018-02-15"
                },
                {
                    "id": 71,
                    "make": "Chrysler",
                    "model": "LHS",
                    "year": 2001,
                    "price": 29444.71,
                    "licensed": false,
                    "date_Added": "2017-10-25"
                },
                {
                    "id": 72,
                    "make": "Porsche",
                    "model": "944",
                    "year": 1984,
                    "price": 7396.95,
                    "licensed": true,
                    "date_Added": "2017-10-26"
                },
                {
                    "id": 73,
                    "make": "Subaru",
                    "model": "Legacy",
                    "year": 2010,
                    "price": 24491.8,
                    "licensed": false,
                    "date_Added": "2017-12-26"
                },
                {
                    "id": 74,
                    "make": "Volvo",
                    "model": "XC90",
                    "year": 2003,
                    "price": 29009.65,
                    "licensed": true,
                    "date_Added": "2018-04-24"
                },
                {
                    "id": 75,
                    "make": "Buick",
                    "model": "Skyhawk",
                    "year": 1985,
                    "price": 10567.27,
                    "licensed": false,
                    "date_Added": "2018-03-21"
                },
                {
                    "id": 76,
                    "make": "GMC",
                    "model": "Envoy XUV",
                    "year": 2004,
                    "price": 20997.71,
                    "licensed": true,
                    "date_Added": "2018-03-27"
                },
                {
                    "id": 77,
                    "make": "Volvo",
                    "model": "S60",
                    "year": 2009,
                    "price": 28614.95,
                    "licensed": false,
                    "date_Added": "2018-07-25"
                },
                {
                    "id": 78,
                    "make": "Pontiac",
                    "model": "Montana",
                    "year": 2000,
                    "price": 11221.14,
                    "licensed": false,
                    "date_Added": "2018-01-04"
                },
                {
                    "id": 79,
                    "make": "Lexus",
                    "model": "RX",
                    "year": 2002,
                    "price": 23194.01,
                    "licensed": false,
                    "date_Added": "2018-05-02"
                },
                {
                    "id": 80,
                    "make": "Lexus",
                    "model": "RX",
                    "year": 2000,
                    "price": 17805.45,
                    "licensed": false,
                    "date_Added": "2018-09-11"
                }
            ]
        }
    }
] as Warehouse[]
let tmp: Warehouse[];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new VehicleService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return whole mock after subscribe', () =>{
    httpClientSpy.get.and.returnValue(of(warehouses));
    service.getVehicles().subscribe(result => tmp = result);
    expect(tmp).toBe(warehouses);
  })

});
