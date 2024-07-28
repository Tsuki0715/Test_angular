import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  templateUrl: './home.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'hello-world';
  myBtn: string = 'My Button';
  counter: number = 0;

  // attr binding
  isDisabled: boolean = false;
  angularImage: string = 'angular.png';

  // style binding
  bgColor: string = 'blue';
  titleColor: string = 'white';
  description: string = 'font-size: 30px; color: red;';

  // class binding
  redTextBF: boolean = false;
  redTextBT: boolean = true;
  redTextSY: string = 'yes';
  redTextSN: string = 'yes';

  incrementCounter() {
    this.counter++;
    console.log (`Counter: ${this.counter}`);
  }
}
