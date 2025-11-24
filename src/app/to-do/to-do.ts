import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  imports: [],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDo {
title: string="";
dueDate: Date|null = null;
priority: string="";
addTask() 
{
  const titleInput = document.getElementById('title') as HTMLInputElement;
  const dueDateInput = document.getElementById('dueDate') as HTMLInputElement;
  const priorityInput=document.getElementById('priority') as HTMLSelectElement;
  this.title=titleInput.value;
  this.dueDate=new Date(dueDateInput?.value);
  this.priority=priorityInput.value;
  console.log(this.title, this.dueDate, this.priority);

}
  

}
