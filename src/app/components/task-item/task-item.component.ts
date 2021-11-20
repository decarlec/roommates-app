import { Component, OnInit, Input} from '@angular/core'
import { TaskItem } from '../../TaskItem';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  @Input() taskItem: TaskItem;

  showSubtasks: boolean = false;

  ngOnInit(): void {
  }

  onClick(){
    this.showSubtasks = !this.showSubtasks;
  }

}
