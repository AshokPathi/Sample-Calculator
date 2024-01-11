import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  providers: [CalculatorService]
})
export class CalculatorComponent {
  title = 'my-app';
  number1!: number;
  number2!: number;
  result: number | null = null;
  display = '0';
  firstValue: number | null = null;
  action: string | null = null;
  constructor(private calculatorService: CalculatorService) { }
  // add() {
    
  // };

  numClick(val: { toString: () => any; }) {
    console.log("sinside num");
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }
  oper(action: string | null) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    console.log("inside calc");
    const a = this.firstValue;
    const b = parseFloat(this.display);

    if (this.action === 'm') {
      this.calculatorService.multiply(a!, b)
      .subscribe((data)=>{
        console.log(data);
        if(data)
        {
        this.firstValue = data;
        this.display = data.toString();
        }
      });
    }
   
    else if (this.action === 'a') {
      this.calculatorService.add(a!, b)
      .subscribe((data)=>{
        console.log(data);
        if(data)
        {
        this.firstValue = data;
        this.display = data.toString();
        }
      });
    }

    else if (this.action === 's') {
          this.calculatorService.subtract(a!, b)
          .subscribe((data)=>{
            console.log(data);
            if(data)
            {
            this.firstValue = data;
            this.display = data.toString();
            }
          });
        }

    else if (this.action === 'd') {
          this.calculatorService.division(a!, b)
          .subscribe((data)=>{
            console.log(data);
            if(data)
            {
            this.firstValue = data;
            this.display = data.toString();
            }
          });
        }
        else if (this.action === 'md') {
          this.calculatorService.mod(a!, b)
          .subscribe((data)=>{
            console.log(data);
            if(data)
            {
            this.firstValue = data;
            this.display = data.toString();
            }
          });
        }
    else if (this.action === 'sq') {
          this.calculatorService.square(a!)
          .subscribe((data)=>{
            console.log(data);
            if(data)
            {
            this.firstValue = data;
            this.display = data.toString();
            }
          });
        }
        else if (this.action === 'sr') {
          this.calculatorService.squareroot(a!)
          .subscribe((data)=>{
            console.log(data);
            if(data)
            {
            this.firstValue = data;
            this.display = data.toString();

            }
          });
        }

      }

  backspace(){
    this.display = this.display.substring(0, this.display.length - 1);  
  }

    }

    
