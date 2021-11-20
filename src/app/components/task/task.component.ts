import { Component, OnInit, Input } from '@angular/core'
import { Task } from 'src/app/models/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  @Input() task: Task;

  showSubtasks: boolean = false;

  ngOnInit(): void {
  }

  onClick(){
    this.showSubtasks = !this.showSubtasks;
  }

}
