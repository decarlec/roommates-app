import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subtask } from 'src/app/models/subtask';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {
  @Input() subtask : Subtask;
  @Output() changed: EventEmitter<Subtask> = new EventEmitter();
  
  constructor() { }

  checkboxOnClick(){
    this.subtask.completed = !this.subtask.completed;
   this.changed.emit(this.subtask);
  }

  ngOnInit(): void {
  }

}
