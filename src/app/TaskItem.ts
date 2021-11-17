import { Subtask } from "./Subtask";

export interface TaskItem {
    id: number;
    name: string;
    detailsText?: string;
    completed: boolean;
    Subtasks?: Subtask[];
}