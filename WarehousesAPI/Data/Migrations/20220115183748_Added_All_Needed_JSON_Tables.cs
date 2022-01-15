using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WarehousesAPI.Data.Migrations
{
    public partial class Added_All_Needed_JSON_Tables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date_Added",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Licensed",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Make",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "price",
                table: "Cars");

            migrationBuilder.RenameColumn(
                name: "Model",
                table: "Cars",
                newName: "Location");

            migrationBuilder.CreateTable(
                name: "LocationDictionaries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    location = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LocationDictionaries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    lat = table.Column<string>(type: "TEXT", nullable: true),
                    @long = table.Column<string>(name: "long", type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Vehicles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Make = table.Column<string>(type: "TEXT", nullable: true),
                    Model = table.Column<string>(type: "TEXT", nullable: true),
                    Year = table.Column<int>(type: "INTEGER", nullable: false),
                    Price = table.Column<double>(type: "REAL", nullable: false),
                    Licensed = table.Column<bool>(type: "INTEGER", nullable: false),
                    Date_Added = table.Column<string>(type: "TEXT", nullable: true),
                    CarsId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vehicles_Cars_CarsId",
                        column: x => x.CarsId,
                        principalTable: "Cars",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Warehouses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    LocationId = table.Column<int>(type: "INTEGER", nullable: true),
                    carsId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Warehouses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Warehouses_Cars_carsId",
                        column: x => x.carsId,
                        principalTable: "Cars",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Warehouses_Locations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "Locations",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_CarsId",
                table: "Vehicles",
                column: "CarsId");

            migrationBuilder.CreateIndex(
                name: "IX_Warehouses_carsId",
                table: "Warehouses",
                column: "carsId");

            migrationBuilder.CreateIndex(
                name: "IX_Warehouses_LocationId",
                table: "Warehouses",
                column: "LocationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LocationDictionaries");

            migrationBuilder.DropTable(
                name: "Vehicles");

            migrationBuilder.DropTable(
                name: "Warehouses");

            migrationBuilder.DropTable(
                name: "Locations");

            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Cars",
                newName: "Model");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date_Added",
                table: "Cars",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "Licensed",
                table: "Cars",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Make",
                table: "Cars",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Cars",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "price",
                table: "Cars",
                type: "REAL",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
