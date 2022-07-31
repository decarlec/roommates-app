import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
//import { Task } from '..task/model/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    getTasks() {
        return of(TASKS);
    }
}