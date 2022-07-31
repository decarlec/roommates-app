import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromTask from 'src/app/task/store/reducer/task.reducer'

export interface State {
    tasks: fromTask.TaskState
}

export const reducers: ActionReducerMap<State> = {
    tasks: fromTask.taskReducer
}

export const selectTaskState = createFeatureSelector<fromTask.TaskState>('tasks');

export const selectTasks = createSelector(
    selectTaskState,
    fromTask.selectAllTasks
)


