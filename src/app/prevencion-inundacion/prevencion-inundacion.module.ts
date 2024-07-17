import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevencionInundacionPageRoutingModule } from './prevencion-inundacion-routing.module';

import { PrevencionInundacionPage } from './prevencion-inundacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevencionInundacionPageRoutingModule
  ],
  declarations: [PrevencionInundacionPage]
})
export class PrevencionInundacionPageModule {}
