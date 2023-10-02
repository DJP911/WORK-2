import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginportalComponent } from './loginportal.component';

describe('LoginportalComponent', () => {
  let component: LoginportalComponent;
  let fixture: ComponentFixture<LoginportalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginportalComponent]
    });
    fixture = TestBed.createComponent(LoginportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
