import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecisionDuranteDeslizamientoPage } from './decision-durante-deslizamiento.page';

const routes: Routes = [
  {
    path: '',
    component: DecisionDuranteDeslizamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecisionDuranteDeslizamientoPageRoutingModule {}
