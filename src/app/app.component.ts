import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppendPipe } from './pipes/append.pipe';
import { MessagesService } from './services/messages.service';
import { Post } from './interfaces/posts.interface';
import { Product } from './interfaces/data.interface';
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    CommonModule, 
    AppendPipe, 
    ReactiveFormsModule, 
    TaskComponent],
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
  // constructor(private messageService: MessagesService) { 
  //   this.messages2 = messageService.getMessages();
  // }

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

  /**********************
  Template Driven Forms
  **********************/
  title6: string = 'Template Driven Forms';
  user: {name: string; email: string} = {
    name: '',
    email: '',
  }

  onSubmit(userForm: NgForm) {
    if (userForm.valid) {
      console.log(userForm.value, this.user);
    }
  }

  validateEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.user.email);
  }

  /**********************
  Reactive Forms
  **********************/
  title7: string = 'Reactive Forms';
  userReactiveForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private messageService: MessagesService) { 
    // ServicesDI
    this.messages2 = messageService.getMessages();

    // Reactive Forms
    this.userReactiveForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }),
      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      ]),
    });
  }

  get phoneNumbers() {
    return this.userReactiveForm.get('phoneNumbers') as FormArray;
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.formBuilder.control('', [Validators.required, Validators.minLength(8)]));
  }

  onSubmit2() {
    if (this.userReactiveForm.valid) {
      console.log(this.userReactiveForm.value);
    }
  }

  // Component
  title8: string = 'Component';
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];

  deleteTask(task: string) {  
    this.tasks = this.tasks.filter(t => t !== task);
    console.log(this.tasks);
  }
}
