import { TestBed } from '@angular/core/testing';

import { ThemeSwitcherService } from './theme-switcher.service';

describe('ThemeSwitcherService', () => {
  let service: ThemeSwitcherService;
  let localStore = {} as Record<string, string>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeSwitcherService);
    jest.spyOn(window.localStorage, 'getItem');
    jest.fn((key: string) => (key in localStore ? localStore[key] : null));
    jest.spyOn(window.localStorage, 'setItem');
    jest.fn((key: string, value: string) => (localStore[key] = value + ''));
    jest.spyOn(window.localStorage, 'clear');
    jest.fn(() => (localStore = {}));
  });
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return current theme', () => {
    service.setTheme('light');
    expect(service.getTheme()).toBe('light');
  });
  it('should set theme to dark', () => {
    service.setTheme('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });
  it('should toggle theme', () => {
    expect(service.toggleTheme('dark')).toBe('light');
    expect(service.toggleTheme('light')).toBe('dark');
  });
});
