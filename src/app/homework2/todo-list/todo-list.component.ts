import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  tasks: string[] = [];
  newTask: string = '';

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if (this.newTask !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}
