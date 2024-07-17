import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecisionDuranteInundacionPage } from './decision-durante-inundacion.page';

const routes: Routes = [
  {
    path: '',
    component: DecisionDuranteInundacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecisionDuranteInundacionPageRoutingModule {}
