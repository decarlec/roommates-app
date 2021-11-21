import { Subtask } from "./subtask";

export interface Task {
    id: number;
    name: string;
    detailsText?: string;
    completed: boolean;
    Subtasks?: Subtask[];
}
