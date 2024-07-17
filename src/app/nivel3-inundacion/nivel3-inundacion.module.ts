import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nivel3InundacionPageRoutingModule } from './nivel3-inundacion-routing.module';

import { Nivel3InundacionPage } from './nivel3-inundacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nivel3InundacionPageRoutingModule
  ],
  declarations: [Nivel3InundacionPage]
})
export class Nivel3InundacionPageModule {}
