import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nivel2DeslizamientoPage } from './nivel2-deslizamiento.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel2DeslizamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel2DeslizamientoPageRoutingModule {}
