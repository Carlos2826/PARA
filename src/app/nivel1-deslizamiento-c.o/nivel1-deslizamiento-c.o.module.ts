import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nivel1DeslizamientoCOPageRoutingModule } from './nivel1-deslizamiento-c.o-routing.module';

import { Nivel1DeslizamientoCOPage } from './nivel1-deslizamiento-c.o.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nivel1DeslizamientoCOPageRoutingModule
  ],
  declarations: [Nivel1DeslizamientoCOPage]
})
export class Nivel1DeslizamientoCOPageModule {}
