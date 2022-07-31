import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Task } from 'src/app/task/model/task.model'; 
import { Subtask } from 'src/app/models/subtask';
import { ParseTreeResult } from '@angular/compiler';
import { taskReducer } from 'src/app/task/task.reducers';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() task: Task;
  //Event emitter that will be listened for by the tasklistcomponent.html
  @Output() deleted: EventEmitter<Task> = new EventEmitter();
  @Output() changed: EventEmitter<Task> = new EventEmitter();

  showSubtasks: boolean = false;
  isEditMode: boolean = true;

  ngOnInit(): void {
  }

  onClick(){
    this.showSubtasks = !this.showSubtasks;
  }

  onDoubleClick(){
    this.deleted.emit(this.task);
  }

  //If task has all subtasks completed it should be considered complete
  handleSubtaskChanged(subtask: Subtask){
    this.task.completed = this.task.Subtasks.every((subtask) => subtask.completed);
  }

  checkboxOnClick(){
    this.task.completed = !this.task.completed;
    this.changed.emit(this.task);
  }

}
