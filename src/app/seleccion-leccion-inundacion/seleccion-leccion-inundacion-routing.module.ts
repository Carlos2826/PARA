import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionLeccionInundacionPage } from './seleccion-leccion-inundacion.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionLeccionInundacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionLeccionInundacionPageRoutingModule {}
