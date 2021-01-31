import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcIrrfPageRoutingModule } from './calc-irrf-routing.module';

import { CalcIrrfPage } from './calc-irrf.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalcIrrfPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CalcIrrfPage]
})
export class CalcIrrfPageModule {}
