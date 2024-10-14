import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: String;
  flowers: String;

  constructor(){
    this.title = "Learning Japanese";
    this.flowers = "&#x1F338;&#x1F338;&#x1F338;&#x1F338;&#x1F338;&#x1F338;&#x1F338;&#x1F338;&#x1F338;&#x1F338;"
  }
}
