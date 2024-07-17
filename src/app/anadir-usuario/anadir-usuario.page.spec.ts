import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirUsuarioPage } from './anadir-usuario.page';

describe('AnadirUsuarioPage', () => {
  let component: AnadirUsuarioPage;
  let fixture: ComponentFixture<AnadirUsuarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
