import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionLeccionDeslizamientoPage } from './seleccion-leccion-deslizamiento.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionLeccionDeslizamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionLeccionDeslizamientoPageRoutingModule {}
