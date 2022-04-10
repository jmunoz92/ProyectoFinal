import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { IndicadoresComponent } from './indicadores.component';


@NgModule({
  declarations: [
    IndicadoresComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule
  ]
})
export class IndicadoresModule { }
