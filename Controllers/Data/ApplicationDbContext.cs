using System.Collections.Generic;
using SampleCalculator.Models;
using Microsoft.EntityFrameworkCore;

namespace SampleCalculator.Controllers.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<CalculationOperation> CalculationOperation{ get; set; }
    }
}
