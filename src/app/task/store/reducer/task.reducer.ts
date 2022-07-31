import { Action, createReducer, on, StateObservable } from '@ngrx/store';
import * as TaskActions from 'src/app/task/store/action/task.actions';
import { Task } from 'src/app/task/model/task.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';


export const taskFeatureKey = 'tasks';

export interface TaskState extends EntityState<Task> {
}

export const adapter: EntityAdapter<Task> =
  createEntityAdapter<Task>();

export const initialTaskState: TaskState =
  adapter.getInitialState();

export const taskReducer = createReducer(
  initialTaskState,
  on(TaskActions.tasksLoaded,
    (state, { tasks }) => adapter.setAll(tasks, state)),
  on(TaskActions.addTask,
    (state, { task }) => adapter.addOne(task, state)),
  on(TaskActions.deleteTask,
    (state, { task }) => adapter.removeOne(task.id, state)),
  on(TaskActions.updateTask,
    (state, { update }) => adapter.updateOne(update, state))
);

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectTaskIds = selectIds;

// select the dictionary of user entities
export const selectTaskEntities = selectEntities;

// select the array of users
export const selectAllTasks = selectAll;

// select the total user count
export const selectTaskTotal = selectTotal;