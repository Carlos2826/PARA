import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nivel3InundacionCOPage } from './nivel3-inundacion-c.o.page';

const routes: Routes = [
  {
    path: '',
    component: Nivel3InundacionCOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nivel3InundacionCOPageRoutingModule {}
