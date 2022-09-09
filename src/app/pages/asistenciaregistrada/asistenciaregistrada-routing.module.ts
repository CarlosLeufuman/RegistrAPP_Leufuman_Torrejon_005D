import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaregistradaPage } from './asistenciaregistrada.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaregistradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaregistradaPageRoutingModule {}
