import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoInundacionPage } from './juego-inundacion.page';

describe('JuegoInundacionPage', () => {
  let component: JuegoInundacionPage;
  let fixture: ComponentFixture<JuegoInundacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoInundacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
