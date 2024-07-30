import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppendPipe } from './pipes/append.pipe';
import { MessagesService } from './services/messages.service';
import { Post } from './interfaces/posts.interface';
import { Product } from './interfaces/data.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, AppendPipe],
  // templateUrl: './app.component.html',
  templateUrl: './home.html',
  styleUrl: './app.component.scss',
  providers: [MessagesService],
})
export class AppComponent implements OnInit {
  title1: string = 'hello-world';
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

  // FormsModule
  inputText: string = "Initial Value";

  // ngClass
  message: string = 'This is a dangerous message!';
  classes: string = 'danger text-size';

  // ngStyle
  selectedColor: string = 'red';

  /**********************
  Structural Directives 
  **********************/
  title2: string = 'Structural Directives';

  // ngIf
  isLoggedIn: boolean = true;
  username: string = 'Terry';

  // ngFor
  names: string[] = ['Tom', 'Jane', 'Mary'];

  // ngSwitch
  grade: string = "A";

  /**********************
  Pipes
  **********************/
  title3: string = 'Pipes';

  today: number = Date.now();

  currency: number = 1.3456;

  /**********************
  ServicesDI
  **********************/
  title4: string = 'ServicesDI';
  messages2: string[] = [];
  constructor(private messageService: MessagesService) { 
    this.messages2 = messageService.getMessages();
  }

  /**********************
  API Integration with HttpClient Module
  **********************/
  title5: string = 'API Integration with HttpClient Module';
  posts: Post[] = [];

  ngOnInit() {
    this.messageService.getPosts().subscribe({
      next: (response: Post[]) => {
        this.posts = response;
      },
      error: (error) => {
        console.error(error);
      }
    });

    this.messageService.getProducts().subscribe({
      next: (data: Product) => {
        console.log(data)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
