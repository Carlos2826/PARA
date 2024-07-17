import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarContenidoPageRoutingModule } from './eliminar-contenido-routing.module';

import { EliminarContenidoPage } from './eliminar-contenido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarContenidoPageRoutingModule
  ],
  declarations: [EliminarContenidoPage]
})
export class EliminarContenidoPageModule {}
