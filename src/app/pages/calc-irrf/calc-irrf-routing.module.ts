import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcIrrfPage } from './calc-irrf.page';

const routes: Routes = [
  {
    path: '',
    component: CalcIrrfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcIrrfPageRoutingModule {}
