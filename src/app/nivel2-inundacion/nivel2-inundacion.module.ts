import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nivel2InundacionPageRoutingModule } from './nivel2-inundacion-routing.module';

import { Nivel2InundacionPage } from './nivel2-inundacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nivel2InundacionPageRoutingModule
  ],
  declarations: [Nivel2InundacionPage]
})
export class Nivel2InundacionPageModule {}
