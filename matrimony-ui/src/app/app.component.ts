import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matrimony-ui';
  public primary = 'green';
  constructor() {
    console.log(this.primary);
  }
}