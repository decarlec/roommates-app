import { Task } from "../model/task.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';
import { TASKS } from "src/app/mock-tasks";

@Injectable()
export class TaskService{
    http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }

    getAllTasks(): Observable<Task[]>{
        //return this.http.get<Task[]>('/api/tasks');
        return of(TASKS);
    }

    createTask(task: Task): Observable<Task> {
        return null; //return this.http.post<Task>('/api/tasks', task);
      }
    
      deleteTask(taskId: number): Observable<any> {
        return null;
        //return this.http.delete('/api/tasks/' + taskId);
      }
    
      updateTask(taskId: string | number, changes: Partial<Task>): Observable<any> {
        return null;
        //return this.http.put('/api/tasks/' + taskId, changes);
      }
}