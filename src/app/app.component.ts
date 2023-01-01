import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeSwitcherService } from './services/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'template-angular';

  constructor(private themeSwitcherService: ThemeSwitcherService) {}

  toggleTheme() {
    const theme = this.themeSwitcherService.toggleTheme(
      this.themeSwitcherService.getTheme() ?? 'light'
    );
    this.themeSwitcherService.setTheme(theme);
  }
}
