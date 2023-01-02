import {
  async,
  ComponentFixture,
  inject,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { SidemenuComponent } from './sidemenu.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../../views/login/login.component';

describe('SidemenuComponent', () => {
  let component: SidemenuComponent;
  let fixture: ComponentFixture<SidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidemenuComponent],
      imports: [
        RouterLink,
        RouterTestingModule.withRoutes([
          { path: 'Login', component: LoginComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit toggleTheme when theme switcher btn is clicked', () => {
    const spy = jest.spyOn(component.toggleTheme, 'emit');
    const btn = fixture.nativeElement.querySelector(
      '[data-test-id="theme-switcher"]'
    );
    btn.click();
    expect(spy).toHaveBeenCalled();
  });
  it('should navigate to login when login link is clicked', () => {
    waitForAsync(
      inject([Router, Location], (router: Router) => {
        const spy = jest.spyOn(router, 'navigate').mockImplementation();
        const link = fixture.nativeElement.querySelector(
          '[data-test-id="link-login"]'
        );
        link.click();
        expect(spy).toHaveBeenCalledWith(['login']);
      })
    );
  });
});
