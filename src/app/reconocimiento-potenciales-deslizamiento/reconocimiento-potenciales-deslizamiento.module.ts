import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReconocimientoPotencialesDeslizamientoPageRoutingModule } from './reconocimiento-potenciales-deslizamiento-routing.module';

import { ReconocimientoPotencialesDeslizamientoPage } from './reconocimiento-potenciales-deslizamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReconocimientoPotencialesDeslizamientoPageRoutingModule
  ],
  declarations: [ReconocimientoPotencialesDeslizamientoPage]
})
export class ReconocimientoPotencialesDeslizamientoPageModule {}
