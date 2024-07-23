import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Nivel3DeslizamientoCORoutingModule } from './nivel3-deslizamiento-c.o-routing.module';
import { Nivel3DeslizamientoCOPage } from './nivel3-deslizamiento-c.o.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Nivel3DeslizamientoCORoutingModule
  ],
  declarations: [Nivel3DeslizamientoCOPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Nivel3DeslizamientoCOPageModule {}
