import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReconocimientoPotencialesInundacionPage } from './reconocimiento-potenciales-inundacion.page';

const routes: Routes = [
  {
    path: '',
    component: ReconocimientoPotencialesInundacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReconocimientoPotencialesInundacionPageRoutingModule {}
