import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: string;
  @Output() taskDeleted = new EventEmitter<string>();

  onDeleteClick() {
    this.taskDeleted.emit(this.task);
    console.log("Task in task.component.ts: " + this.task)
  }
}
