import { Component, OnInit } from '@angular/core';
//import { TASKS } from '../../mock-tasks.ts';
import { Task } from 'src/app/models/task';
import { select, Store }  from '@ngrx/store';
import { selectTasks } from 'src/app/task/store/selector/task.selectors'
import { TaskState } from 'src/app/task/store/reducer/task.reducer'
import { addTask } from 'src/app/task/store/action/task.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]>;
  //tasks = TASKS;
  
  constructor(private store: Store<TaskState>){
    this.tasks$ = this.store.pipe(select(selectTasks));
  }

  onClick(){
    const task : Task = { id: 1, name: "Task", completed: false };
    this.store.dispatch(addTask(task));
  }
  ngOnInit(): void {
  }

}
