import { Component,signal,effect } from '@angular/core';

@Component({
  selector: 'app-pr-signals',
  imports: [],
  templateUrl: './pr-signals.html',
  styleUrl: './pr-signals.css',
})
export class PrSignals {
  constructor() {
    effect(()=>{
    console.log("conuter updated :"+this.count());
    console.log("color updated :"+this.color());

  })
  }
  count = signal(0);
  color = signal('color:red;');
  bg=signal('background-color:white;');
  increment() {
    this.count.set(this.count() + 1);
    this.checkColor(this.count());
  }
  decrement() {
    this.count.update(()=>this.count() - 1);
    this.checkColor(this.count());
  }
  checkColor(countval:number){
    if(countval>0){
      this.color.set('color:blue;');
      this.bg.set('background-color:orange;');
    }else if(countval<0){
      this.color.set('color:gray;');
    } 
    else{
      this.color.set('color:orange;');
    }
  }
}
