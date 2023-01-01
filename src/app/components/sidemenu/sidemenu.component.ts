import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  template: `
    <aside class="bg-light vh-100 p-5">
      <a (click)="toggleTheme.emit()">Toggle theme</a>
      <ul>
        <li class="list-unstyled">
          <a class="text-decoration-none" [routerLink]="['login']">Login </a>
        </li>
      </ul>
    </aside>
  `,
  styles: [],
})
export class SidemenuComponent {
  @Output() toggleTheme = new EventEmitter<void>();
}
