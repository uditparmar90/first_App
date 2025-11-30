import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-pr-signals',
  imports: [],
  templateUrl: './pr-signals.html',
  styleUrl: './pr-signals.css',
})
export class PrSignals {
  count = signal(0);
  color = signal('color:red;');
  increment() {
    this.count.set(this.count() + 1); 
    this.color.set('color:blue;');
  }
  decrement() {
    this.count.update(()=>this.count() - 1);
    this.color.set('color:gray;');
  }

}
