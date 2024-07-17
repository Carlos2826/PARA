import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionJuegoPage } from './seleccion-juego.page';

describe('SeleccionJuegoPage', () => {
  let component: SeleccionJuegoPage;
  let fixture: ComponentFixture<SeleccionJuegoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
