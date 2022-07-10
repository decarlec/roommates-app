import { Component, OnInit } from '@angular/core';
//import { TASKS } from '../../mock-tasks.ts';
import { Task } from 'src/app/models/task';
import { select, Store, UPDATE }  from '@ngrx/store';
import { selectTasks } from 'src/app/task/store/selector/task.selectors'
import { TaskState } from 'src/app/task/store/reducer/task.reducer'
import { addTask, deleteTask, loadTasks, updateTask } from 'src/app/task/store/action/task.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]> = this.store.select(selectTasks)
  taskEventSubscription = this
  
  constructor(private store: Store<TaskState>){
  }

  ngOnInit(){
    this.store.dispatch(loadTasks());
  }

  onClick_Add(){
    const task : Task = { id: 10, name: "Task", completed: false };
    this.store.dispatch(addTask(task));
  }

  onClick_Load(){
    this.store.dispatch(loadTasks())
  }

  handleTaskDeletion(task: Task){
    this.store.dispatch(deleteTask(task));
  }

  handleCompleteChanged(data: Task){
    const t = {... data};
    t.completed = !t.completed
    this.store.dispatch(updateTask({ payload: { task: { id: data.id, changes: t } } }));
  }

}
