import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'calc-inss',
    loadChildren: () => import('./pages/calc-inss/calc-inss.module').then( m => m.CalcInssPageModule)
  },
  {
    path: 'calc-irrf',
    loadChildren: () => import('./pages/calc-irrf/calc-irrf.module').then( m => m.CalcIrrfPageModule)
  },
  {
    path: 'release-notes',
    loadChildren: () => import('./pages/release-notes/release-notes.module').then( m => m.ReleaseNotesPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'calc-dissidio',
    loadChildren: () => import('./pages/calc-dissidio/calc-dissidio.module').then( m => m.CalcDissidioPageModule)
  },  {
    path: 'calc-decimo-terceiro',
    loadChildren: () => import('./pages/calc-decimo-terceiro/calc-decimo-terceiro.module').then( m => m.CalcDecimoTerceiroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
