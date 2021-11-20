import { Subtask } from "./subtask";

export class Task {
    id: number;
    name: string;
    detailsText?: string;
    completed: boolean;
    Subtasks?: Subtask[];
}
