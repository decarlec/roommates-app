import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../TaskItem';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks = TASKS;

  selectedTask?: TaskItem;
  
  onSelect(taskItem: TaskItem): void {
    this.selectedTask = taskItem;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
