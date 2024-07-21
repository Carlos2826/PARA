import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JuegoInundacionPageRoutingModule } from './juego-inundacion-routing.module';
import { JuegoInundacionPage } from './juego-inundacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegoInundacionPageRoutingModule
  ],
  declarations: [JuegoInundacionPage]
})
export class JuegoInundacionPageModule {}

