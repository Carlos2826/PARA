import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirContenidoPage } from './anadir-contenido.page';

describe('AnadirContenidoPage', () => {
  let component: AnadirContenidoPage;
  let fixture: ComponentFixture<AnadirContenidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirContenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
