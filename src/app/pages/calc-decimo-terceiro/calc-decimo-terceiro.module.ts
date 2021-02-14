import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcDecimoTerceiroPageRoutingModule } from './calc-decimo-terceiro-routing.module';

import { CalcDecimoTerceiroPage } from './calc-decimo-terceiro.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalcDecimoTerceiroPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CalcDecimoTerceiroPage]
})
export class CalcDecimoTerceiroPageModule {}
