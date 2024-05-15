import { Component, OnInit } from '@angular/core';
import { IonButton, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public Brownies=
  [
    {id:1,nome:'Brownies',descricao:'Brownie',preco: 4.00},
    {id:2,nome:'BrowniesCoco',descricao:'Brownie feito com Coco',preco: 4.00},
    {id:3,nome:'Brownie Recheado',descricao:'Brownie Recheados com Doce de Leite',preco: 7.00},
  ];

  constructor() { }

  ngOnInit() {
  }

}
