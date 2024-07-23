import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nivel1DeslizamientoCOPage } from './nivel1-deslizamiento-c.o.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel1DeslizamientoCOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel1DeslizamientoCOPageRoutingModule {}
