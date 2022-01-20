# Warehouses excersise
DISCLAIMER: Finishing the excersise definitely took me more than 5 hours that were recommended.

## List of needed tools
In order to run every aspect of the project you will need:
- .NET 6.0 SDK - https://dotnet.microsoft.com/en-us/download
- Node.js at least 17.2.0 version - https://nodejs.org/en/
- Angular CLI - https://angular.io/cli
- Google Chrome - https://www.google.com/intl/pl_pl/chrome/

## Instruction how to setup environment
- download the project and extract it to desired location (let's say it's C:\)
- install Google Chrome from .exe file downloaded
- install .NET SDK from .exe file downloaded
- install Node.js from .msi file downloaded
- open command prompt :
  - if you want to test https version of API head to API project location (taking example C:\warehouses-master\WarehousesAPI) and run "dotnet dev-certs https --trust"
  - head to frontend project location (taking example C:\warehouses-master\WarehousesFrontend)
    - run "npm install" command
    - run angular CLI installation command "npm install -g @angular/cli"
    
## Instruction how to run the project

#### /API AND FRONTEND NEED TO BE RUNNING FROM DIFFERENT INSTANCE OF COMMAND PROMPT AT THE SAME TIME\

#### to run API:
- in command prompt head to API project location (taking example C:\warehouses-master\WarehousesAPI)
- run "dotnet run" command
- because of API Key authentication none of the link calls to API neither Swagger calls are going to work from browser
  - you can test the responses by calling API links from tools like Postman
    - link for GET request: https://localhost:5001/api/warehouses/ or for http version: http://localhost:5000/api/warehouses/
    - add header with key "ApiKey" and value of "QA8SMF2C733TUVOM22OVZYFZZ0P2UNVHT7A3HGDDEDT8PQXIK9NNBPZ3YITIG0X70ZWPEWYDMM4QOTY9MCZMUYXVED4PZ3464SWD0XNNYP3YG3N0XB8ZQ0RAIW8MGD8A"
 
#### to run Frontend:
- in command prompt head to Frontend project location (taking example C:\warehouses-master\WarehouseFrontend)
- run "ng serve" command
- url for application: http://localhost:4200/

#### /TO RUN TESTS API AND FRONTEND CAN BE OFFLINE\

#### to run API tests:
- in command prompt head to API Tests project location (taking example C:\warehouses-master\WarehousesAPITests)
- run "dotnet test" command

#### to run Frontend tests:
- in command prompt head to Frontend project location (taking example C:\warehouses-master\WarehousesFrontend)
- run "ng test"
- if you want to check code coverage run "ng test --code-coverage"
  - the file with code coverage can be found in - C:\warehouses-master\WarehousesFrontend\coverage\WarehousesFronend\index.html (taking example)