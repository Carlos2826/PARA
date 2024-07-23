import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoDeslizamientoPage } from './juego-deslizamiento.page';

const routes: Routes = [
  {
    path: '',
    component: JuegoDeslizamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoDeslizamientoPageRoutingModule {}

