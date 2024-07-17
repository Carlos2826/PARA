import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankingGlobalPage } from './ranking-global.page';

describe('RankingGlobalPage', () => {
  let component: RankingGlobalPage;
  let fixture: ComponentFixture<RankingGlobalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingGlobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
