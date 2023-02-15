import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //declarations dice que componentes 
    //tiene este modulo:
    declarations: [
      heroeComponent,
      ListadoComponent      
    ],
    //que cosas quiero que sean visibles 
    //afuera de este modulo:
    exports: [
        ListadoComponent
    ],
    //podemos usar los imports que va aca?
    //van modulos son objetos que van en los imports
    imports: [
       CommonModule
    ]
})
export class HeroesModule{

}