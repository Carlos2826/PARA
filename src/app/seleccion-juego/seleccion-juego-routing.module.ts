import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionJuegoPage } from './seleccion-juego.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionJuegoPageRoutingModule {}
