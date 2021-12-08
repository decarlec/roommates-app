import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/task.service';
import { TaskEffects } from './task.effects';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { taskReducer } from './task.reducers';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { TaskComponent } from '../components/task/task.component';
import { SubtaskComponent } from '../components/subtask/subtask.component';

@NgModule({
  declarations: [
    TaskListComponent,
    CreateTaskComponent,
    TaskComponent,
    SubtaskComponent,
    CreateTaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('tasks', taskReducer),
    EffectsModule.forFeature([TaskEffects]),
  ],
  providers: [TaskService],
  exports: [TaskListComponent, CreateTaskComponent],
})
export class TaskModule {}
