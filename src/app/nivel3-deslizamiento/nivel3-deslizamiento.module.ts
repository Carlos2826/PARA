import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Nivel3DeslizamientoPageRoutingModule } from './nivel3-deslizamiento-routing.module';
import { Nivel3DeslizamientoPage } from './nivel3-deslizamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nivel3DeslizamientoPageRoutingModule
  ],
  declarations: [Nivel3DeslizamientoPage]
})
export class Nivel3DeslizamientoPageModule {}
