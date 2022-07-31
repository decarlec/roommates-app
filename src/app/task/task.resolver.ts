import { areTasksLoaded } from './task.selectors';
import { loadTasks, tasksLoaded } from './task.actions';
import { TaskState } from './task.reducers';
import { Task } from './model/task.model';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class TaskResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<TaskState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(areTasksLoaded),
        tap((tasksLoaded) => {
          if (!tasksLoaded) {
            this.store.dispatch(loadTasks());
          }

        }),
        filter(tasksLoaded => tasksLoaded),
        first()
    );
  }
}