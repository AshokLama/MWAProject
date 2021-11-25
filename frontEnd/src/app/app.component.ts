import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>List of My Courses</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'courses-app';
}
