import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { RemoteService } from '../remote.service';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-pagina-prodotto',
  templateUrl: './pagina-prodotto.component.html',
  styleUrls: ['./pagina-prodotto.component.css']
})
export class PaginaProdottoComponent implements OnInit {
  
  num:number=1;
  mine:RemoteService;
  item:Item;
  constructor(private state:StateServiceService, private remote:RemoteService) { 
    this.mine = remote;
  }
  counter:number;
  ngOnInit(): void {
    this.item= this.state.data;
    this.counter=0;
    console.log(this.item);
  }
  dec(){
    this.counter--;
  }
  inc(){
    this.counter++;
  }
  add(){
    for (let index = 0; index < this.num; index++) {
      this.state.add(this.item);
    }
  }
}
