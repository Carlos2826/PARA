import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nivel2DeslizamientoCOPageRoutingModule } from './nivel2-deslizamiento-c.o-routing.module';

import { Nivel2DeslizamientoCOPage } from './nivel2-deslizamiento-c.o.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nivel2DeslizamientoCOPageRoutingModule
  ],
  declarations: [Nivel2DeslizamientoCOPage]
})
export class Nivel2DeslizamientoCOPageModule {}
