import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcPericulosidadePage } from './calc-periculosidade.page';

const routes: Routes = [
  {
    path: '',
    component: CalcPericulosidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcPericulosidadePageRoutingModule {}
