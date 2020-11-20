import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeletorDataPageRoutingModule } from './seletor-data-routing.module';

import { SeletorDataPage } from './seletor-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeletorDataPageRoutingModule
  ],
  declarations: [SeletorDataPage]
})
export class SeletorDataPageModule {}
