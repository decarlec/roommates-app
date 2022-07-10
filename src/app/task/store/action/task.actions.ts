import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models/task';

export const tasksLoaded = createAction(
  '[Task API] Tasks Loaded Success',
  props<{ tasks: Task[]}>()
);

export const loadTasks = createAction(
  '[Initialize Tasks] Load Tasks'
);

export const addTask = createAction(
  '[Task] Add Task',
  props<{ task: Task}>()
);

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ task: Task}>()
);

export const updateTask = createAction(
  '[Task] Update Task',
  props<{ update: Update<Task>}>()
);


