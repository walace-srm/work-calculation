import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CalcPericulosidadePageRoutingModule } from "./calc-periculosidade-routing.module";

import { CalcPericulosidadePage } from "./calc-periculosidade.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CalcPericulosidadePageRoutingModule,
  ],
  declarations: [CalcPericulosidadePage],
})
export class CalcPericulosidadePageModule {}
