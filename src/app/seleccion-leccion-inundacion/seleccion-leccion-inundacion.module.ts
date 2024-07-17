import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionLeccionInundacionPageRoutingModule } from './seleccion-leccion-inundacion-routing.module';

import { SeleccionLeccionInundacionPage } from './seleccion-leccion-inundacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionLeccionInundacionPageRoutingModule
  ],
  declarations: [SeleccionLeccionInundacionPage]
})
export class SeleccionLeccionInundacionPageModule {}
