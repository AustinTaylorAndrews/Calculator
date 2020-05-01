import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.scss']
})
export class SimpleCalculatorComponent implements OnInit {

  constructor() { }
  
  DisplayValue: number;

  ngOnInit(): void {
    this.DisplayValue = 0;
  }
  }

}
