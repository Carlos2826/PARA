import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionJuegoPageRoutingModule } from './seleccion-juego-routing.module';

import { SeleccionJuegoPage } from './seleccion-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionJuegoPageRoutingModule
  ],
  declarations: [SeleccionJuegoPage]
})
export class SeleccionJuegoPageModule {}
