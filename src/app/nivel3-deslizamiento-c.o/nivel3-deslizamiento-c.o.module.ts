import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nivel3DeslizamientoCOPageRoutingModule } from './nivel3-deslizamiento-c.o-routing.module';

import { Nivel3DeslizamientoCOPage } from './nivel3-deslizamiento-c.o.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nivel3DeslizamientoCOPageRoutingModule
  ],
  declarations: [Nivel3DeslizamientoCOPage]
})
export class Nivel3DeslizamientoCOPageModule {}
