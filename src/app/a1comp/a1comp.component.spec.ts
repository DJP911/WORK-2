import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A1compComponent } from './a1comp.component';

describe('A1compComponent', () => {
  let component: A1compComponent;
  let fixture: ComponentFixture<A1compComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [A1compComponent]
    });
    fixture = TestBed.createComponent(A1compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
