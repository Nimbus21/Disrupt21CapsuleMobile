import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeletorDataPage } from './seletor-data.page';

const routes: Routes = [
  {
    path: '',
    component: SeletorDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeletorDataPageRoutingModule {}
