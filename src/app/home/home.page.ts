import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private storage:Storage) {
    this.storage.create();
  }

  variavel_lista = [];
  texto: string = "";
  valor: number = 0;
  soma = 0;
  aux = 0;

ngOnInit(){
    this.atualizaLista();
  }

atualizaLista() {
    this.variavel_lista = [];
    this.storage.forEach((value, key, index) => {
  console.log(index);
      this.variavel_lista.push([key, value]);
    })

    this.somar();
  }

  async adiciona() {
    if ( !(this.texto == "") && !(this.valor < 0)) {
      this.variavel_lista.push(this.texto);
      this.aux = this.variavel_lista.length - 1
      await this.storage.set(this.aux.toString(), [this.texto, this.valor]);
      this.atualizaLista();
      this.valor = 0;
      this.texto = "";
    }
  }

  async remove(indice) {
    await this.storage.remove(indice);
    this.atualizaLista();
  }

  somar() {
    this.soma = 0;
    this.storage.forEach((value, key, index) => {
      this.soma += value[1];
    })
  }
}
