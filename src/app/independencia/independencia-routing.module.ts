import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndependenciaPage } from './independencia.page';

const routes: Routes = [
  {
    path: '',
    component: IndependenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndependenciaPageRoutingModule {}
