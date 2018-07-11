import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  changeProperty = true;
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  value = 100;
  Changed() {
    this.changeProperty = !this.changeProperty;
  }
}
