import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundacaoPageRoutingModule } from './fundacao-routing.module';

import { FundacaoPage } from './fundacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundacaoPageRoutingModule
  ],
  declarations: [FundacaoPage]
})
export class FundacaoPageModule {}
