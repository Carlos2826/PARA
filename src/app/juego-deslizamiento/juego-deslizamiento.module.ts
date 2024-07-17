import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegoDeslizamientoPageRoutingModule } from './juego-deslizamiento-routing.module';

import { JuegoDeslizamientoPage } from './juego-deslizamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegoDeslizamientoPageRoutingModule
  ],
  declarations: [JuegoDeslizamientoPage]
})
export class JuegoDeslizamientoPageModule {}
