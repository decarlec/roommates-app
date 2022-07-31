import { Component, OnInit } from '@angular/core';
//import { TASKS } from '../../mock-tasks.ts';
import { getAllTasks } from 'src/app/task/task.selectors';
import { taskActionTypes } from 'src/app/task/task.actions';
import { TaskState } from 'src/app/task/task.reducers';
import { Task } from 'src/app/task/model/task.model';
import { Store }  from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/task/services/task.service';
import { Update } from '@ngrx/entity';
//import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]>;
  taskEventSubscription = this
  
  taskToBeUpdated: Task;

  isUpdateActivated = false;
  
  constructor(private taskService: TaskService, private store: Store<TaskState>){
  }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getAllTasks();
  }

  onClick(){
    //Do nothing
  }

  handleTaskChanged(task : Task){
    //Do nothing
  }

  deleteTask(taskId: number){
    this.store.dispatch(taskActionTypes.deleteTask({taskId}))
  }

  showUpdateForm(task: Task){
    this.taskToBeUpdated = { ...task };
    this.isUpdateActivated = true;
  }

  updateTask(updateForm){
    const update: Update<Task> = {
      id: this.taskToBeUpdated.id,
      changes:{
        ...this.taskToBeUpdated,
        ...updateForm.value
      }
    };

    this.store.dispatch(taskActionTypes.updateTask({update}))

    this.isUpdateActivated = false;
    this.taskToBeUpdated = null;
  }

}
