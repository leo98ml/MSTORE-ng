import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../model/item';
import { RemoteService } from '../remote.service';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-acquista',
  templateUrl: './acquista.component.html',
  styleUrls: ['./acquista.component.css']
})
export class AcquistaComponent implements OnInit {
  mine:StateServiceService;
  constructor(private router:Router, private state:StateServiceService,private remote:RemoteService) { 
    this.mine=state;
  }
  prezzoTotale:number=0;
  ngOnInit(): void {
    this.update();
    this.state.erroreAcquista = false;
    this.mine.lenChanged.subscribe(()=>{
      this.update();
    });
  }
  update(): void {
    this.prezzoTotale = 0;
    this.mine.buyListItems.forEach(element => {
      this.prezzoTotale += element.price - element.price/100*element.discountPercentage;
    });
  }
  buy(){
    let itemsId:number[] = [];
    this.mine.buyListItems.forEach(element => {
      itemsId.push(element.id);
    });
    this.state.buy(itemsId);
  }
}
