import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { RemoteService } from 'src/app/remote.service';
import { StateServiceService } from 'src/app/state-service.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {

  mine:StateServiceService;

  constructor(private router:Router, private state:StateServiceService,private remote:RemoteService) { 
    this.mine=state;
  }

  ngOnInit(): void {;
  }

  updateLocalCart():void{
    let itemsId:number[] = [];
    this.mine.buyListItems.forEach(element => {
      itemsId.push(element.id)
    });
    this.state.persistCart(itemsId);
  }

  remove(itemId:number){
    let rem: boolean = false;
    this.mine.buyListItems = this.mine.buyListItems.filter(
      (item)=>{
        if(rem) return true;
        else {
          rem = item.id == itemId;
          return !rem;
        }
      }
    )
    this.mine.added.emit(1);
    this.mine.lenChanged.emit(1);
    this.updateLocalCart();
  }
  
  stretch(list:Item[]):Item[]{
    let ret:Item[] = [];
    let ids:number[] = [];
    list.forEach(e => {
      if(ids.indexOf(e.id) <0){
        ids.push(e.id);
        ret.push(e);
      }
    });
    return ret;
  }
  
  isUserLogged(){
    return this.state.isUserLogged;
  }
  goLogin(){
    this.router.navigate(["login"]);
  }
  acquista():void{
    this.router.navigate(["acquista"]);
  }
}
