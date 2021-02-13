import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcDissidioPageRoutingModule } from './calc-dissidio-routing.module';

import { CalcDissidioPage } from './calc-dissidio.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalcDissidioPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [CalcDissidioPage]
})
export class CalcDissidioPageModule {}
