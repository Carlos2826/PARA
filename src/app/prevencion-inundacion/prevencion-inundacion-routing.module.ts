import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevencionInundacionPage } from './prevencion-inundacion.page';

const routes: Routes = [
  {
    path: '',
    component: PrevencionInundacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevencionInundacionPageRoutingModule {}
