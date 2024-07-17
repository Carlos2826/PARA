import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoInundacionPage } from './juego-inundacion.page';

const routes: Routes = [
  {
    path: '',
    component: JuegoInundacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoInundacionPageRoutingModule {}
