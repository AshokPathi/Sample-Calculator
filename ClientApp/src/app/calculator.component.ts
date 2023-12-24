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
  // constructor(private calculatorService: CalculatorService) { }
  // add() {
  //   this.calculatorService.add(this.number1, this.number2)
  //     .subscribe(result => this.result = result);
  // };

  numClick(val: { toString: () => any; }) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }
  oper(action: any) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }
}
