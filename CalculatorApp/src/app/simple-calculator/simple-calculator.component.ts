import { Component, OnInit } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.scss']
})
export class SimpleCalculatorComponent implements OnInit {

  constructor() { }

  DisplayValue: number;
  FirstValue: number;
  SecondValue: number;
  Operation: string;

  ngOnInit(): void {
    this.ResetState();
  }

  Negate(): void {
    this.DisplayValue = this.DisplayValue * -1;
  }

  ClickNumber(number: number): void {
    this.DisplayValue = 10 * this.DisplayValue + number;
    if (this.Operation == null) {
      this.FirstValue = this.DisplayValue;
    }
    else {
      this.SecondValue = this.DisplayValue;
    }
  }

  ClickOperation(operation: string): void {
    this.PerformOperation();
    this.FirstValue = this.DisplayValue;
    this.Operation = operation;
    this.DisplayValue = 0;
  }

  ClickEquals(): void {
    this.PerformOperation();
  }

  ResetState(): void {
    this.DisplayValue = 0;
    this.FirstValue = this.DisplayValue;
    this.SecondValue = null;
    this.Operation = null;
  }

  PerformOperation(): void {
    if (this.CanPerformOperation()) {
      switch (this.Operation) {
        case '+':
          this.DisplayValue = this.FirstValue + this.SecondValue;
          break;
        case '-':
          this.DisplayValue = this.FirstValue - this.SecondValue;
          break;
        case 'x':
          this.DisplayValue = this.FirstValue * this.SecondValue;
          break;
        case '/':
          this.DisplayValue = this.FirstValue / this.SecondValue;
          break;
        default:
          return;
      }
      this.FirstValue = this.DisplayValue;
      this.Operation = null;
      this.SecondValue = null;
    }
  }

  CanPerformOperation(): boolean {
    return this.Operation != null && this.FirstValue != null && this.SecondValue != null;
  }
}
