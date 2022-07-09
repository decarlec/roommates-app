import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { Store, StoreModule } from '@ngrx/store';
import { taskFeatureKey, taskReducer } from './store/reducer/task.reducer';
import { TaskComponent } from '../components/task/task.component';
import { SubtaskComponent } from '../components/subtask/subtask.component';
import { MaterialModule } from '../material.module';
import { TaskEffects } from './store/effect/task.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [TaskListComponent, TaskComponent, SubtaskComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(taskFeatureKey, taskReducer),
    MaterialModule,
    EffectsModule.forFeature([TaskEffects])
  ],
  exports:[
    TaskListComponent,
    TaskComponent,
    SubtaskComponent,
  ]
})
export class TaskModule { }
