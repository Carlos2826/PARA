import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevencionDeslizamientoPage } from './prevencion-deslizamiento.page';

const routes: Routes = [
  {
    path: '',
    component: PrevencionDeslizamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevencionDeslizamientoPageRoutingModule {}
