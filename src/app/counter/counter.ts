import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count:number=0;
  HendlePlus(){
    this.count++
  }
  HendleMinus(){
    if(this.count>0){
      this.count--;
    }else{
      alert("Are you Mad...");
    }
    
  }
  HendleReset(){
    this.count=0;
  }

}
