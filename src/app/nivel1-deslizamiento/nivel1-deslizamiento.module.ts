import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Nivel1DeslizamientoPageRoutingModule } from './nivel1-deslizamiento-routing.module';
import { Nivel1DeslizamientoPage } from './nivel1-deslizamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nivel1DeslizamientoPageRoutingModule
  ],
  declarations: [Nivel1DeslizamientoPage]
})
export class Nivel1DeslizamientoPageModule {}

