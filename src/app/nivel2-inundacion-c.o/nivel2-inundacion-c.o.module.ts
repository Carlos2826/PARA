// nivel2-inundacion-c.o.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Nivel2InundacionCOPageRoutingModule } from './nivel2-inundacion-c.o-routing.module';
import { Nivel2InundacionCOPage } from './nivel2-inundacion-c.o.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Nivel2InundacionCOPageRoutingModule
  ],
  declarations: [Nivel2InundacionCOPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Nivel2InundacionCOPageModule {}

