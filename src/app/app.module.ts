import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Tarea crear un nuevo modulo contador.module.ts
//hacer las declaraciones y exportaciones para usar el contador 

import { HeroesModule } from './heroes/heroes.module';
import { contadorComponent } from './contador/contador/contador.component';
import { ContadorModule } from './contador/contador/contador.module';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
