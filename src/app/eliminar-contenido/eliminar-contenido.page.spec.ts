import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarContenidoPage } from './eliminar-contenido.page';

describe('EliminarContenidoPage', () => {
  let component: EliminarContenidoPage;
  let fixture: ComponentFixture<EliminarContenidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarContenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
