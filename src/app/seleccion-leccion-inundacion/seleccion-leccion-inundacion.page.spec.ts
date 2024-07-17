import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionLeccionInundacionPage } from './seleccion-leccion-inundacion.page';

describe('SeleccionLeccionInundacionPage', () => {
  let component: SeleccionLeccionInundacionPage;
  let fixture: ComponentFixture<SeleccionLeccionInundacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionLeccionInundacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
