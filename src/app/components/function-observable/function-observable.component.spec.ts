import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionObservableComponent } from './function-observable.component';

describe('FunctionObservableComponent', () => {
  let component: FunctionObservableComponent;
  let fixture: ComponentFixture<FunctionObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionObservableComponent]
    });
    fixture = TestBed.createComponent(FunctionObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
