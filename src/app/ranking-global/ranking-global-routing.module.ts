import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingGlobalPage } from './ranking-global.page';

const routes: Routes = [
  {
    path: '',
    component: RankingGlobalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankingGlobalPageRoutingModule {}
