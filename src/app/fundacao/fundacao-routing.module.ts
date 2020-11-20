import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundacaoPage } from './fundacao.page';

const routes: Routes = [
  {
    path: '',
    component: FundacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundacaoPageRoutingModule {}
