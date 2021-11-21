import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  texto: string = "";
  @Output() btnClick = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }
  //Envia los contenidos del text input al componente padre
  onClick(){
    this.btnClick.emit(this.texto);
  }
}
