import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcompComponent } from './bcomp.component';

describe('BcompComponent', () => {
  let component: BcompComponent;
  let fixture: ComponentFixture<BcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BcompComponent]
    });
    fixture = TestBed.createComponent(BcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
