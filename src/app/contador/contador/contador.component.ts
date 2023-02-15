//1.- Creamos una clase ContadorComponent
//2.- lo decoraos como cun componente de angular con @
import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1> {{ title }}</h1>

    <h3>la base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(+base)"> + {{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acumular(-base)"> - {{ base}}</button>
    
    `
})
export class contadorComponent {

    title = 'Hola como estas';
    numero: number = 10;
    base: number =5;
  
    /*
    Tarea: crear una nueva propiedad: base 
     base: number =5;
    */
  
    acumular(valor: number){
      this.numero += valor;
    }

}
