import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoDeslizamientoPage } from './juego-deslizamiento.page';

describe('JuegoDeslizamientoPage', () => {
  let component: JuegoDeslizamientoPage;
  let fixture: ComponentFixture<JuegoDeslizamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDeslizamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
