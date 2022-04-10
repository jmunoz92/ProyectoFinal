import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeModule } from './home/home.module';


const routes: Routes = [
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),canActivate:[AuthGuard] },
{ path: 'novedades', loadChildren: () => import('./novedades/novedades.module').then(m => m.NovedadesModule),canActivate:[AuthGuard] },
{ path: 'indicadores', loadChildren: () => import('./indicadores/indicadores.module').then(m => m.IndicadoresModule),canActivate:[AuthGuard] },
{ path:'**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
