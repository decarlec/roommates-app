import { Task } from "./model/task.model";
import { createAction, props } from "@ngrx/store";
import { Update } from "@ngrx/entity";

export const loadTasks = createAction(
    '[Tasks List] Load Tasks via Service',
);

export const tasksLoaded = createAction(
    '[Tasks Effect] Tasks Loaded Successfully',
    props<{tasks: Task[]}>()
);

export const createTask = createAction(
    '[Create Task Component] Create Task',
    props<{task: Task}>() 
);

export const deleteTask = createAction(
    '[Task List Operations] deleteTask',
    props<{taskId: number}>()
);

export const updateTask = createAction(
    '[Task List Operations] updateTask',
    props<{update: Update<Task>}>()
);

export const taskActionTypes = {
    loadTasks,
    tasksLoaded,
    createTask,
    deleteTask,
    updateTask
}