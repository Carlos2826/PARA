import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReconocimientoPotencialesInundacionPageRoutingModule } from './reconocimiento-potenciales-inundacion-routing.module';

import { ReconocimientoPotencialesInundacionPage } from './reconocimiento-potenciales-inundacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReconocimientoPotencialesInundacionPageRoutingModule
  ],
  declarations: [ReconocimientoPotencialesInundacionPage]
})
export class ReconocimientoPotencialesInundacionPageModule {}
