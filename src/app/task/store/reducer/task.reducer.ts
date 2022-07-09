import { Action, createReducer, on } from '@ngrx/store';
import * as TaskActions from 'src/app/task/store/action/task.actions';
import { Task } from 'src/app/models/task';
import { state } from '@angular/animations';


export const taskFeatureKey = 'task';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
}

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.tasksLoaded,
    (state: TaskState, { tasks }) =>
    ({
      ...state,
      tasks: [...state.tasks, ...tasks]
    })),
  on(TaskActions.addTask,
    (state: TaskState, { task }) =>
    ({
      ...state,
      tasks: [...state.tasks, task]
    })),
  on(TaskActions.deleteTask,
    (state: TaskState, { task }) =>
    ({
      ...state,
      tasks: state.tasks.filter((targetTask) => targetTask !== task)
    })),
  on(TaskActions.updateTask,
    (state: TaskState, { task }) =>
    ({
      ...state,
      
    })),

);

