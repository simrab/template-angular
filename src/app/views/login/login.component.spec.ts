import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a form', () => {
    expect(component.formLogin).toBeTruthy();
  });
  it('should have a form with 2 fields', () => {
    expect(component.formLogin?.controls).toBeTruthy();
    expect(Object.keys(component.formLogin?.controls).length).toBe(2);
  });
  it('should have a password field required with min length 8', () => {
    expect(component.formLogin?.controls.password).toBeTruthy();
    expect(
      component.formLogin?.controls.password.errors?.['required']
    ).toBeTruthy();
    component.formLogin.get('password')?.setValue('1234567');
    expect(
      component.formLogin?.controls.password.errors?.['minlength']
    ).toStrictEqual({
      actualLength: 7,
      requiredLength: 8,
    });
  });
  it('should have a name field required', () => {
    expect(component.formLogin?.controls.name).toBeTruthy();
    expect(
      component.formLogin?.controls.name.errors?.['required']
    ).toBeTruthy();
  });
  it('should change pswd input visibility if user clicks on eye icon', () => {
    const spy = jest
      .spyOn(component, 'togglePswdVisibility')
      .mockImplementation();
    const btn = fixture.nativeElement.querySelector(
      '[data-test-id="togglePswdVisibility"]'
    );
    btn.click();
    expect(spy).toHaveBeenCalled();
  });
  it('should toggle pswd input visibility if togglePswdVisibility is called', () => {
    expect(component.isPswdVisible).toBeFalsy();
    component.togglePswdVisibility();
    expect(component.isPswdVisible).toBeTruthy();
  });
});
