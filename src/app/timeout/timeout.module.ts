import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TimeoutPageRoutingModule } from './timeout-routing.module';

import { TimeoutPage } from './timeout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeoutPageRoutingModule
  ],
  declarations: [TimeoutPage]
})
export class TimeoutPageModule {}
