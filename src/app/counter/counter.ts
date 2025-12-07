import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  startCount: number = 0;
  count:number=0;
  constructor(private router:ActivatedRoute) {
    this.router.params.subscribe(params=>{
      this.startCount= parseInt(params['start']) || 0;
    })

  }
  ngOnInit(){
    console.log("this.startCount : "+this.startCount);
  }
    
  HendlePlus(){
    this.count++;
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
