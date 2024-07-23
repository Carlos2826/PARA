// nivel3-inundacion.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Nivel3InundacionPageRoutingModule } from './nivel3-inundacion-routing.module';
import { Nivel3InundacionPage } from './nivel3-inundacion.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Nivel3InundacionPageRoutingModule
  ],
  declarations: [Nivel3InundacionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Nivel3InundacionPageModule {}
