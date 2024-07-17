import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nivel3InundacionPage } from './nivel3-inundacion.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel3InundacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel3InundacionPageRoutingModule {}
