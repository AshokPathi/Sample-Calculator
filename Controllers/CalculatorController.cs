using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/calculator")]
public class CalculatorController : ControllerBase
{
    [HttpGet("add")]
    public ActionResult<int> Add(int a, int b)
    {
        return Ok(a + b);
    }

    [HttpGet("subtract")]
    public ActionResult<int> Subtract(int a, int b)
    {
        return Ok(a - b);
    }

    [HttpGet("multiply")]
    public ActionResult<int> Multiplication(int a, int b)
    {
        return Ok(a * b);
    }

    [HttpGet("division")]
    public ActionResult<decimal> Divide(int a, int b)
    {
        if (b == 0)
        {
            return 0;
        }
        decimal result = (decimal)a / b;
        return Ok(result);

    }

    [HttpGet("mod")]
    public ActionResult<int> Mod(int a, int b)
    {
        return Ok(a % b);
    }

    [HttpGet("square")]
    public ActionResult<int> Square(int a)
    {
        return Ok(a * a);
    }

    [HttpGet("squareroot")]
    public ActionResult<int> SquareRoot(int a)
    {
        return Ok(Math.Sqrt(a));
    }

    [HttpPost("saveCalculation")]
    public ActionResult SaveCalculation(int result, string operationName)
    {
        // To do
        return Ok();
    }
}