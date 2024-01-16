using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SampleCalculator.Migrations
{
    /// <inheritdoc />
    public partial class CalculatorOperations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CalculatorOperations",
                columns: table => new
                {
                    CalculationName = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Result = table.Column<float>(type: "real", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedDateTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CalculatorOperations", x => x.CalculationName);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CalculatorOperations");
        }
    }
}
