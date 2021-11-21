import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deleted: EventEmitter<Task> = new EventEmitter();

  showSubtasks: boolean = false;

  ngOnInit(): void {
  }

  onClick(){
    this.showSubtasks = !this.showSubtasks;
  }

  onDoubleClick(){
    this.deleted.emit(this.task);
  }

}
