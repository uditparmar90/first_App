import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-list',
  imports: [CommonModule],
  templateUrl: './to-list.html',
  styleUrl: './to-list.css',
})
export class ToList {
  @Input() allTasks: any[] = [];  
}
