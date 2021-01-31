import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcInssPage } from './calc-inss.page';

const routes: Routes = [
  {
    path: '',
    component: CalcInssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcInssPageRoutingModule {}
