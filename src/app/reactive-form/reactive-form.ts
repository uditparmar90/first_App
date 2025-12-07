import { Component } from '@angular/core';
import { FormControl, ɵInternalFormsSharedModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.css'],
})
export class ReactiveForm {
  name=new FormControl('');
  email=new FormControl('');
  submitForm(){
    console.log("Name: "+this.name.value);
    console.log("Email: "+this.email.value);
  }

}
