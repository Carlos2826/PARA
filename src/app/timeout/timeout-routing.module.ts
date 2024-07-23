import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeoutPage } from './timeout.page';

const routes: Routes = [
  {
    path: '',
    component: TimeoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeoutPageRoutingModule {}
