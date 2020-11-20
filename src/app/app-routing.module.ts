import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'seletor-data',
    loadChildren: () => import('./seletor-data/seletor-data.module').then( m => m.SeletorDataPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'fundacao',
    loadChildren: () => import('./fundacao/fundacao.module').then( m => m.FundacaoPageModule)
  },
  {
    path: 'independencia',
    loadChildren: () => import('./independencia/independencia.module').then( m => m.IndependenciaPageModule)
  },
  {
    path: 'visita',
    loadChildren: () => import('./visita/visita.module').then( m => m.VisitaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
