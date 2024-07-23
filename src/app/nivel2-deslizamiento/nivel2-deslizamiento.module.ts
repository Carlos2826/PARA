import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nivel2DeslizamientoPageRoutingModule } from './nivel2-deslizamiento-routing.module';

import { Nivel2DeslizamientoPage } from './nivel2-deslizamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nivel2DeslizamientoPageRoutingModule
  ],
  declarations: [Nivel2DeslizamientoPage]
})
export class Nivel2DeslizamientoPageModule {}
