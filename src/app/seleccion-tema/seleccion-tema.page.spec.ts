import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionTemaPage } from './seleccion-tema.page';

describe('SeleccionTemaPage', () => {
  let component: SeleccionTemaPage;
  let fixture: ComponentFixture<SeleccionTemaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionTemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
