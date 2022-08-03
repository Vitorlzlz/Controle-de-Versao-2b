import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  variavel_lista = [];
  texto = "";
  
  adiciona() {
    if (!(this.texto == "")) {
      this.variavel_lista.push(this.texto);
      this.texto = ""; 
    } 
    
  }
  //*ngFor = "let item of minhaLista" no item
  //[(ngModel)]="texto" no input

}
