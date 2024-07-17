import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecisionDuranteInundacionPageRoutingModule } from './decision-durante-inundacion-routing.module';

import { DecisionDuranteInundacionPage } from './decision-durante-inundacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecisionDuranteInundacionPageRoutingModule
  ],
  declarations: [DecisionDuranteInundacionPage]
})
export class DecisionDuranteInundacionPageModule {}
