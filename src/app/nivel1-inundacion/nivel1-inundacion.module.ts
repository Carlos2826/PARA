import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nivel1InundacionPageRoutingModule } from './nivel1-inundacion-routing.module';

import { Nivel1InundacionPage } from './nivel1-inundacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nivel1InundacionPageRoutingModule
  ],
  declarations: [Nivel1InundacionPage]
})
export class Nivel1InundacionPageModule {}
