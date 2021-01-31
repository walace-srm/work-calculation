import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcInssPageRoutingModule } from './calc-inss-routing.module';

import { CalcInssPage } from './calc-inss.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalcInssPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CalcInssPage]
})
export class CalcInssPageModule {}
