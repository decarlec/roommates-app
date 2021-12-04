import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Task } from 'src/app/models/task';
import { Subtask } from 'src/app/models/subtask';

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
