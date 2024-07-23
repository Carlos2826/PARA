import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeoutPage } from './timeout.page';

describe('TimeoutPage', () => {
  let component: TimeoutPage;
  let fixture: ComponentFixture<TimeoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
