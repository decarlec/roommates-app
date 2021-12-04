import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models/task';

// export const loadTasks = createAction(
//   '[Task] Load Tasks',
// );

export const addTask = createAction(
  '[Task] Add Task',
  (task: Task) => ({task})
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  (task: Task) => ({task})
);

export const updateTask = createAction(
  '[Task] Update Task',
  (task: Task) => ({task})
)

