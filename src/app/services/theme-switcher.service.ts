import { Injectable } from '@angular/core';
export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  toggleTheme(theme: Theme) {
    /** Get local theme setting */
    return theme === 'dark' ? 'light' : 'dark';
  }

  getTheme() {
    return localStorage.getItem('theme') as Theme | null;
  }

  setTheme(theme: Theme) {
    localStorage.setItem('theme', theme);
  }
}
