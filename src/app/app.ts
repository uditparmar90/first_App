import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink  } from '@angular/router';
import { Counter } from './counter/counter';
import { Navbar } from './navbar/navbar';
import { ToDo } from './to-do/to-do';
import { PrSignals } from './pr-signals/pr-signals';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,RouterLink ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first_App');
}
