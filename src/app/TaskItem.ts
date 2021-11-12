import { NumberValueAccessor } from "@angular/forms";

export interface TaskItem {
    id: number;
    name: string;
    detailsText?: string;
}