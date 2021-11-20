import { Action, createReducer, on } from '@ngrx/store';
import * as TaskActions from 'src/app/task/store/action/task.actions';
import { Task} from 'src/app/models/task';
import { TASKS } from 'src/app/mock-tasks';


export const taskFeatureKey = 'task';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: TASKS,
}
  //Tasks: TASKS
export const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask,
    (state: TaskState, {task}) =>
      ({...state,
        tasks: [...state.tasks, task]
      }))
);

