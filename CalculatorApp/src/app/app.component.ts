import { Component } from '@angular/core';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CalculatorApp';
}
