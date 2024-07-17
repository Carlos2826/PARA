import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReconocimientoPotencialesDeslizamientoPage } from './reconocimiento-potenciales-deslizamiento.page';

const routes: Routes = [
  {
    path: '',
    component: ReconocimientoPotencialesDeslizamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReconocimientoPotencialesDeslizamientoPageRoutingModule {}
