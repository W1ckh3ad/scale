import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // WIP
  title = 'Scale + Angular';

  links = [
    { name: 'Vanilla Form' },
    { name: 'Scale Form' }
  ]
}
