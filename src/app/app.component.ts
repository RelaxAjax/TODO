import { Component, ViewChild } from '@angular/core';
import { ListaComponent } from './components/lista/lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  //Utiliza ViewChild para poder acceder a los metodos del componente lista
  @ViewChild(ListaComponent, {static : true}) lista? : ListaComponent;

  //Envia el texto del formulario al array de elementos TODO a travez de un metodo del componente lista
  recivirToDo($event: any){
    this.lista?.masItem($event);
  }

}
