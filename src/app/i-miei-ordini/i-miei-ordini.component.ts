import { Component, OnInit } from '@angular/core';
import { Fattura } from '../model/fattura';

@Component({
  selector: 'app-i-miei-ordini',
  templateUrl: './i-miei-ordini.component.html',
  styleUrls: ['./i-miei-ordini.component.css']
})
export class IMieiOrdiniComponent implements OnInit {
  fatture: Fattura[] = [
    {
      "id": 100,
      "dataOrdine": new Date(),
      dataConsegna: new Date(),
      prezzo: 1000,
      ordini: [
        {
          idProdotto: 189,
          prezzo: 150,
          scontoPercentage: 10
        },{
          idProdotto: 189,
          prezzo: 150,
          scontoPercentage: 10
        },{
          idProdotto: 189,
          prezzo: 150,
          scontoPercentage: 10
        },{
          idProdotto: 189,
          prezzo: 150,
          scontoPercentage: 10
        }
      ]
    },{
      "id": 100,
      "dataOrdine": new Date(),
      dataConsegna: new Date(),
      prezzo: 1000,
      ordini: [
        {
          idProdotto: 189,
          prezzo: 150,
          scontoPercentage: 10
        },{
          idProdotto: 189,
          prezzo: 150,
          scontoPercentage: 10
        },{
          idProdotto: 189,
          prezzo: 150,
          scontoPercentage: 10
        },{
          idProdotto: 189,
          prezzo: 150,
          scontoPercentage: 10
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  retrive(id: number): string {
    return "gg";
  }
}
