import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './Componentes/cabecera/cabecera.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-29cat47c.us.auth0.com',
      clientId: '4SbGnWRyrKZqRYRTwWJg2awyPq102YrP'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
