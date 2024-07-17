import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionLeccionDeslizamientoPageRoutingModule } from './seleccion-leccion-deslizamiento-routing.module';

import { SeleccionLeccionDeslizamientoPage } from './seleccion-leccion-deslizamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionLeccionDeslizamientoPageRoutingModule
  ],
  declarations: [SeleccionLeccionDeslizamientoPage]
})
export class SeleccionLeccionDeslizamientoPageModule {}
