import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../TaskItem';
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks = TASKS;

  selectedTask?: TaskItem;
  
  onClick(taskItem: TaskItem): void {
    this.selectedTask = taskItem;
    taskItem.detailsText = taskItem.detailsText ? taskItem.detailsText + 1 : "1";
  }

  onRightClick(event: MouseEvent, task: TaskItem): void {
    var target = event;
    event.preventDefault();
    task.detailsText = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
