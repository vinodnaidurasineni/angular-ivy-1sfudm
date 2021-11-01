import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  buttonClicked = true;
  styles = {
    'font-family': 'Times New Roman',
    'font-weight': 'bold',
    'font-size': '12px',
  };
  myname = 'vinod';
  listOfData = [
    { id: 1, name: 'vinod', color: 'red' },
    { id: 2, name: 'abhi', color: 'green' },
    { id: 3, name: 'shanu', color: 'orange' },
    { id: 2, name: 'abhi', color: 'green' },
    { id: 2, name: 'abhi', color: 'green' },
  ];
}
