// nivel2-inundacion.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Nivel2InundacionPageRoutingModule } from './nivel2-inundacion-routing.module';
import { Nivel2InundacionPage } from './nivel2-inundacion.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Nivel2InundacionPageRoutingModule
  ],
  declarations: [Nivel2InundacionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Nivel2InundacionPageModule {}
