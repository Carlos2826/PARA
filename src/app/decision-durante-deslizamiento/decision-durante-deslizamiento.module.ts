import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecisionDuranteDeslizamientoPageRoutingModule } from './decision-durante-deslizamiento-routing.module';

import { DecisionDuranteDeslizamientoPage } from './decision-durante-deslizamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecisionDuranteDeslizamientoPageRoutingModule
  ],
  declarations: [DecisionDuranteDeslizamientoPage]
})
export class DecisionDuranteDeslizamientoPageModule {}
