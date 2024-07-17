import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReconocimientoPotencialesDeslizamientoPage } from './reconocimiento-potenciales-deslizamiento.page';

describe('ReconocimientoPotencialesDeslizamientoPage', () => {
  let component: ReconocimientoPotencialesDeslizamientoPage;
  let fixture: ComponentFixture<ReconocimientoPotencialesDeslizamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoPotencialesDeslizamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
