using System.Net;
using Test = System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using SampleCalculator.Controllers.Data;
using SampleCalculator.Models;

[ApiController]
[Route("api/calculator")]
public class CalculatorController : ControllerBase
{

        private readonly ApplicationDbContext _db;
        public CalculatorController(ApplicationDbContext db)
        {
            _db = db;
        }


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
  
    [HttpGet("Calculatoroperations")]
    public ActionResult<CalculatorOperation> CalculatorOperation(string? name)
        {
        var CalculatorOperationFromdb = _db.CalculatorOperations.Find(name);

        return CalculatorOperationFromdb;
    }

    [HttpPost]
    public void SaveCalculatorOperation(CalculatorOperation calculatorOperation)
    {
        if(_db.CalculatorOperations.Any(x => x.CalculationName != calculatorOperation.CalculationName))
        {
            _db.CalculatorOperations.Add(calculatorOperation);
            _db.SaveChanges();
        }
        else
        {
            ////var resp = new Test.HttpResponseMessage(HttpStatusCode.InternalServerError)
            ////{
            ////    Content = new StringContent(string.Format("This name already exist. Please enter different name")),
            ////    ReasonPhrase = "Duplicate Name"
            ////};
            ////throw new HttpResponseException(resp);
            throw new Exception("bad request");
        }
    }

}