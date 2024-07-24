// nivel3-inundacion-c.o.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Nivel3InundacionCOPageRoutingModule } from './nivel3-inundacion-c.o-routing.module';
import { Nivel3InundacionCOPage } from './nivel3-inundacion-c.o.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Nivel3InundacionCOPageRoutingModule
  ],
  declarations: [Nivel3InundacionCOPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Nivel3InundacionCOPageModule {}