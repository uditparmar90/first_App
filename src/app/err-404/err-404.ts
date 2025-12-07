import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-err-404',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './err-404.html',
  styleUrl: './err-404.css',
})
export class Err404 {

}
