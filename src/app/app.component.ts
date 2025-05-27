import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Menu1Service } from './services/menu1.service';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  name = '';
  isNameVisible = true;
  ldrpstudents = ['raj', 'jay', 'sai'];

  constructor(private menu1Service:Menu1Service){}

  onClick() {
    console.log("in component")
    this.menu1Service.onSubmit(this.name);
  }
}
