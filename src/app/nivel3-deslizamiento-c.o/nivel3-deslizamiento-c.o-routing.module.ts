import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Nivel3DeslizamientoCOPage } from './nivel3-deslizamiento-c.o.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel3DeslizamientoCOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel3DeslizamientoCORoutingModule {}
