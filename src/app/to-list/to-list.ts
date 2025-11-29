import { Component, Input, SimpleChanges,  EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-list.html',
  styleUrl: './to-list.css',
})
export class ToList{
  @Input() allTasks: any;
  @Output() taskChange = new EventEmitter<any>();

  sendToParent() {
    this.taskChange.emit({"": "data from child" });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allTasks']) {
      console.log("ngOnChanges", changes['allTasks'].currentValue);
      this.taskChange.emit(this.allTasks);
    }
  }
}
