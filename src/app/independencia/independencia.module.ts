import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndependenciaPageRoutingModule } from './independencia-routing.module';

import { IndependenciaPage } from './independencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndependenciaPageRoutingModule
  ],
  declarations: [IndependenciaPage]
})
export class IndependenciaPageModule {}
