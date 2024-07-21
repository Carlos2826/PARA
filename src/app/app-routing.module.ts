import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'seleccion-tema',
    loadChildren: () => import('./seleccion-tema/seleccion-tema.module').then(m => m.SeleccionTemaPageModule)
  },
  {
    path: 'seleccion-leccion-inundacion',
    loadChildren: () => import('./seleccion-leccion-inundacion/seleccion-leccion-inundacion.module').then(m => m.SeleccionLeccionInundacionPageModule)
  },
  {
    path: 'seleccion-leccion-deslizamiento',
    loadChildren: () => import('./seleccion-leccion-deslizamiento/seleccion-leccion-deslizamiento.module').then(m => m.SeleccionLeccionDeslizamientoPageModule)
  },
  {
    path: 'nivel1-inundacion',
    loadChildren: () => import('./nivel1-inundacion/nivel1-inundacion.module').then(m => m.Nivel1InundacionPageModule)
  },
  {
    path: 'nivel2-inundacion',
    loadChildren: () => import('./nivel2-inundacion/nivel2-inundacion.module').then(m => m.Nivel2InundacionPageModule)
  },
  {
    path: 'nivel3-inundacion',
    loadChildren: () => import('./nivel3-inundacion/nivel3-inundacion.module').then(m => m.Nivel3InundacionPageModule)
  },
  {
    path: 'nivel1-deslizamiento',
    loadChildren: () => import('./nivel1-deslizamiento/nivel1-deslizamiento.module').then(m => m.Nivel1DeslizamientoPageModule)
  },
  {
    path: 'nivel2-deslizamiento',
    loadChildren: () => import('./nivel2-deslizamiento/nivel2-deslizamiento.module').then(m => m.Nivel2DeslizamientoPageModule)
  },
  {
    path: 'nivel3-deslizamiento',
    loadChildren: () => import('./nivel3-deslizamiento/nivel3-deslizamiento.module').then(m => m.Nivel3DeslizamientoPageModule)
  },
  {
    path: 'prevencion-inundacion',
    loadChildren: () => import('./prevencion-inundacion/prevencion-inundacion.module').then(m => m.PrevencionInundacionPageModule)
  },
  {
    path: 'decision-durante-inundacion',
    loadChildren: () => import('./decision-durante-inundacion/decision-durante-inundacion.module').then(m => m.DecisionDuranteInundacionPageModule)
  },
  {
    path: 'reconocimiento-potenciales-inundacion',
    loadChildren: () => import('./reconocimiento-potenciales-inundacion/reconocimiento-potenciales-inundacion.module').then(m => m.ReconocimientoPotencialesInundacionPageModule)
  },
  {
    path: 'prevencion-deslizamiento',
    loadChildren: () => import('./prevencion-deslizamiento/prevencion-deslizamiento.module').then(m => m.PrevencionDeslizamientoPageModule)
  },
  {
    path: 'decision-durante-deslizamiento',
    loadChildren: () => import('./decision-durante-deslizamiento/decision-durante-deslizamiento.module').then(m => m.DecisionDuranteDeslizamientoPageModule)
  },
  {
    path: 'reconocimiento-potenciales-deslizamiento',
    loadChildren: () => import('./reconocimiento-potenciales-deslizamiento/reconocimiento-potenciales-deslizamiento.module').then(m => m.ReconocimientoPotencialesDeslizamientoPageModule)
  },
  {
    path: 'seleccion-juego',
    loadChildren: () => import('./seleccion-juego/seleccion-juego.module').then(m => m.SeleccionJuegoPageModule)
  },
  {
    path: 'juego-inundacion',
    loadChildren: () => import('./juego-inundacion/juego-inundacion.module').then(m => m.JuegoInundacionPageModule)
  },
  {
    path: 'juego-deslizamiento',
    loadChildren: () => import('./juego-deslizamiento/juego-deslizamiento.module').then(m => m.JuegoDeslizamientoPageModule)
  },
  {
    path: 'ranking-global',
    loadChildren: () => import('./ranking-global/ranking-global.module').then(m => m.RankingGlobalPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then(m => m.EditarPerfilPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then(m => m.AyudaPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then(m => m.AcercaDePageModule)
  },
  {
    path: 'contactenos',
    loadChildren: () => import('./contactenos/contactenos.module').then(m => m.ContactenosPageModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import('./administracion/administracion.module').then(m => m.AdministracionPageModule)
  },
  {
    path: 'anadir-usuario',
    loadChildren: () => import('./anadir-usuario/anadir-usuario.module').then(m => m.AnadirUsuarioPageModule)
  },
  {
    path: 'eliminar-usuario',
    loadChildren: () => import('./eliminar-usuario/eliminar-usuario.module').then(m => m.EliminarUsuarioPageModule)
  },
  {
    path: 'anadir-contenido',
    loadChildren: () => import('./anadir-contenido/anadir-contenido.module').then(m => m.AnadirContenidoPageModule)
  },
  {
    path: 'eliminar-contenido',
    loadChildren: () => import('./eliminar-contenido/eliminar-contenido.module').then(m => m.EliminarContenidoPageModule)
  },
  {
    path: 'opciones',
    loadChildren: () => import('./opciones/opciones.module').then(m => m.OpcionesPageModule)
  },
  {
    path: 'cambiar-contrasena',
    loadChildren: () => import('./cambiar-contrasena/cambiar-contrasena.module').then(m => m.CambiarContrasenaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

