import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-list.html',
  styleUrl: './to-list.css',
})
export class ToList implements OnChanges {

  @Input() allTasks: any[] = [];   // data from parent
  ownTaskCopy: any[] = [];         // local copy for display

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allTasks']) {
      this.ownTaskCopy = [...this.allTasks];  // update local copy
      console.log("Updated ownTaskCopy:", this.ownTaskCopy);
    }
  }

}
