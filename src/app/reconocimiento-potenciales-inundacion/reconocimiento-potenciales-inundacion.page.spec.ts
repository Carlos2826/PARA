import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReconocimientoPotencialesInundacionPage } from './reconocimiento-potenciales-inundacion.page';

describe('ReconocimientoPotencialesInundacionPage', () => {
  let component: ReconocimientoPotencialesInundacionPage;
  let fixture: ComponentFixture<ReconocimientoPotencialesInundacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoPotencialesInundacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
