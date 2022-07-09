import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TaskService } from 'src/app/services/taskservice';
import { Task } from 'src/app/models/task';
import { loadTasks } from '../action/task.actions';
 
@Injectable()
export class TaskEffects {
 
  loadTasks$ = createEffect(() => 
  this.actions$.pipe(
    ofType(loadTasks),
    mergeMap(() => this.taskService.getTasks()
      .pipe(
        map(tasks => ({ type: '[Task API] Tasks Loaded Success', payload: tasks })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}
}