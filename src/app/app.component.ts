import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ThemeSwitcherService } from './services/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'template-angular';
  theme = 'light';

  constructor(
    private themeSwitcherService: ThemeSwitcherService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  toggleTheme() {
    const theme = this.themeSwitcherService.toggleTheme(
      this.themeSwitcherService.getTheme() ?? 'light'
    );
    this.themeSwitcherService.setTheme(theme);
    this.theme = theme;
    this.changeDetectorRef.markForCheck();
  }
}
