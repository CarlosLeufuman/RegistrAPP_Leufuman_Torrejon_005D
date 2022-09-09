import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaregistradaPageRoutingModule } from './asistenciaregistrada-routing.module';

import { AsistenciaregistradaPage } from './asistenciaregistrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaregistradaPageRoutingModule
  ],
  declarations: [AsistenciaregistradaPage]
})
export class AsistenciaregistradaPageModule {}
