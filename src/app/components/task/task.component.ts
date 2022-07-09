import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { taskFeatureKey } from 'src/app/task/store/reducer/task.reducer';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() deleted: EventEmitter<Task> = new EventEmitter();
  @Output() update: EventEmitter<Task> = new EventEmitter();

  completed$: Observable<boolean>;
  showSubtasks: boolean = false;

  ngOnInit(): void {
  }

  onClick(){
    this.showSubtasks = !this.showSubtasks;
  }

  onDoubleClick(){
    this.deleted.emit(this.task);
  }

  onCheck(){
    this.update.emit(this.task);
  }

}
