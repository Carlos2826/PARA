import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrevencionDeslizamientoPage } from './prevencion-deslizamiento.page';

describe('PrevencionDeslizamientoPage', () => {
  let component: PrevencionDeslizamientoPage;
  let fixture: ComponentFixture<PrevencionDeslizamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevencionDeslizamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
