import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nivel3DeslizamientoPage } from './nivel3-deslizamiento.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel3DeslizamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel3DeslizamientoPageRoutingModule {}
