import { Component,OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  SimpleChanges } from '@angular/core';
import { ToList } from '../to-list/to-list';

@Component({
  selector: 'app-to-do',
  imports: [ToList],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDo implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
title: string="";
dueDate: Date|null = null;
priority: string="";
Complated:boolean=false;
allTasks: any[] = [];
addTask() {
  const titleInput = document.getElementById('title') as HTMLInputElement;
  const dueDateInput = document.getElementById('dueDate') as HTMLInputElement;
  const priorityInput = document.getElementById('priority') as HTMLSelectElement;

  this.title = titleInput.value;
  this.dueDate = new Date(dueDateInput.value);
  this.priority = priorityInput.value;
  this.Complated = false;

  const newTask = {
    title: this.title,
    dueDate: this.dueDate,
    priority: this.priority,
    isComplated: this.Complated
  };

  // IMPORTANT FIX
  this.allTasks = [...this.allTasks, newTask];

  // Reset fields
  titleInput.value = '';
  dueDateInput.value = '';
  priorityInput.value = '';

  console.log(this.allTasks);
}

constructor() {
  console.log('Constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
    
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called'); 
  }
  ngAfterContentChecked(): void {
    // allTasks=this.allTasks;
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');  
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  

}
