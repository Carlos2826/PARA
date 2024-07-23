import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nivel2InundacionCOPage } from './nivel2-inundacion-c.o.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel2InundacionCOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel2InundacionCOPageRoutingModule {}
