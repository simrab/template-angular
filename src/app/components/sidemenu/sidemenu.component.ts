import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  template: `
    <aside class="bg-light vh-100 p-xl-5 p-md-2">
      <div class="text-end mb-4">
        <a data-test-id="theme-switcher" (click)="toggleTheme.emit()">TT</a>
      </div>
      <ul>
        <li class="list-unstyled">
          <a
            class="text-decoration-none"
            data-test-id="link-login"
            [routerLink]="['login']"
            >Login
          </a>
        </li>
      </ul>
    </aside>
  `,
  styles: [],
})
export class SidemenuComponent {
  @Output() toggleTheme = new EventEmitter<void>();
}
