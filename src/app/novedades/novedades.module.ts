import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovedadesRoutingModule } from './novedades-routing.module';
import { NovedadesComponent } from './novedades.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NovedadesComponent
  ],
  imports: [
    CommonModule,
    NovedadesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class NovedadesModule { }
