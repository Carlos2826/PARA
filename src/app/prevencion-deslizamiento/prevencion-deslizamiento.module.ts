import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevencionDeslizamientoPageRoutingModule } from './prevencion-deslizamiento-routing.module';

import { PrevencionDeslizamientoPage } from './prevencion-deslizamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevencionDeslizamientoPageRoutingModule
  ],
  declarations: [PrevencionDeslizamientoPage]
})
export class PrevencionDeslizamientoPageModule {}
