import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcDissidioPage } from './calc-dissidio.page';

const routes: Routes = [
  {
    path: '',
    component: CalcDissidioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcDissidioPageRoutingModule {}
