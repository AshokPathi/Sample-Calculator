using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace SampleCalculator.Models
{
    public class CalculatorOperation
    {
        [Key]
        [DisplayName("Calculation Name")]
        public required string CalculationName { get; set; }

        public float Result { get; set; }

        public string? Notes { get; set; }

        [Required]
        public DateTime CreatedDateTime { get; set; } = DateTime.Now;
    }
}
