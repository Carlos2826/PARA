import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nivel1DeslizamientoPage } from './nivel1-deslizamiento.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel1DeslizamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel1DeslizamientoPageRoutingModule {}
