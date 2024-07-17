import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nivel1InundacionPage } from './nivel1-inundacion.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel1InundacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel1InundacionPageRoutingModule {}
