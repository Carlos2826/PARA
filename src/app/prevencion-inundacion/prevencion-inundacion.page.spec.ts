import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrevencionInundacionPage } from './prevencion-inundacion.page';

describe('PrevencionInundacionPage', () => {
  let component: PrevencionInundacionPage;
  let fixture: ComponentFixture<PrevencionInundacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevencionInundacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
