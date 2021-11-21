import { style } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  //Elementos de la lista TODO
  lista: string[] = [];
  //Almacena los estilos cada <li>
  estilos: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstilo(item: number){
    if(this.estilos[item] === ""){
      this.estilos[item] = "line-through";

    }else{
      this.estilos[item] = "";
    }
    console.log(item)
  }

  masItem(texto: string){
    //Añade un nuevo item al la lista TODO
    this.lista.push(texto);
    this.estilos.push("");
  }

}
