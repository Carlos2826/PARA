import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Nivel1InundacionCORoutingModule } from './nivel1-inundacion-c.o-routing.module';

import { Nivel1InundacionCOPage } from './nivel1-inundacion-c.o.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Nivel1InundacionCORoutingModule
  ],
  declarations: [Nivel1InundacionCOPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Nivel1InundacionCOPageModule {}
