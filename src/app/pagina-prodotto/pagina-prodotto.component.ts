import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-pagina-prodotto',
  templateUrl: './pagina-prodotto.component.html',
  styleUrls: ['./pagina-prodotto.component.css']
})
export class PaginaProdottoComponent implements OnInit {

  item:Item;
  constructor(private state:StateServiceService) { }

  ngOnInit(): void {
    this.item= this.state.data;
    console.log(this.item);
  }

}
