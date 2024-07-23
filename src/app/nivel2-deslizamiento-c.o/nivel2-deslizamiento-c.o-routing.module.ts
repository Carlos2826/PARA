import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nivel2DeslizamientoCOPage } from './nivel2-deslizamiento-c.o.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel2DeslizamientoCOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel2DeslizamientoCOPageRoutingModule {}
