import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nivel1InundacionCOPage } from './nivel1-inundacion-c.o.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel1InundacionCOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel1InundacionCORoutingModule {}
