import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { Store, StoreModule } from '@ngrx/store';
import { taskFeatureKey, taskReducer } from './store/reducer/task.reducer';
import { TaskComponent } from '../components/task/task.component';
import { SubtaskComponent } from '../components/subtask/subtask.component';
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({
  declarations: [TaskListComponent, TaskComponent, SubtaskComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(taskFeatureKey, taskReducer),
    MatCheckboxModule
  ],
  exports:[
    TaskListComponent,
    TaskComponent,
    SubtaskComponent,
    MatCheckboxModule
  ]
})
export class TaskModule { }
