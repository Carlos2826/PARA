import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Nivel2DeslizamientoCORoutingModule } from './nivel2-deslizamiento-c.o-routing.module';
import { Nivel2DeslizamientoCOPage } from './nivel2-deslizamiento-c.o.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Nivel2DeslizamientoCORoutingModule
  ],
  declarations: [Nivel2DeslizamientoCOPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Nivel2DeslizamientoCOPageModule {}
