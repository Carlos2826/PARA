import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Nivel1DeslizamientoCORoutingModule } from './nivel1-deslizamiento-c.o-routing.module';
import { Nivel1DeslizamientoCOPage } from './nivel1-deslizamiento-c.o.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Nivel1DeslizamientoCORoutingModule
  ],
  declarations: [Nivel1DeslizamientoCOPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Nivel1DeslizamientoCOPageModule {}
