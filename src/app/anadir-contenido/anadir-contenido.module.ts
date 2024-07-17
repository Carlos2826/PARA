import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirContenidoPageRoutingModule } from './anadir-contenido-routing.module';

import { AnadirContenidoPage } from './anadir-contenido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirContenidoPageRoutingModule
  ],
  declarations: [AnadirContenidoPage]
})
export class AnadirContenidoPageModule {}
