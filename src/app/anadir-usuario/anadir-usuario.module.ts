import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirUsuarioPageRoutingModule } from './anadir-usuario-routing.module';

import { AnadirUsuarioPage } from './anadir-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirUsuarioPageRoutingModule
  ],
  declarations: [AnadirUsuarioPage]
})
export class AnadirUsuarioPageModule {}
