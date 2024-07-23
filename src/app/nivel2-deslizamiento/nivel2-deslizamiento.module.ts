import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Nivel2DeslizamientoPageRoutingModule } from './nivel2-deslizamiento-routing.module';
import { Nivel2DeslizamientoPage } from './nivel2-deslizamiento.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Nivel2DeslizamientoPageRoutingModule
  ],
  declarations: [Nivel2DeslizamientoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Nivel2DeslizamientoPageModule {}
