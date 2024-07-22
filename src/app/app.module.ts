import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './servicios/auth.service';  // Importar el servicio
import { MusicService } from './servicios/musica.service'; // Importar el servicio de música

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,  // Agregar AuthService a los proveedores
    MusicService  // Agregar MusicService a los proveedores
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

