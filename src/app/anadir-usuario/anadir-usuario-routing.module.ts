import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirUsuarioPage } from './anadir-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirUsuarioPageRoutingModule {}
