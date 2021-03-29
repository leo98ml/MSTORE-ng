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

  ngOnInit(): void {

  }

  updateLocalCart():void{
    let itemsId:number[] = [];
    this.mine.buyListItems.forEach(element => {
      itemsId.push(element.id)
    });
    this.state.persistCart(itemsId);
  }

  remove(itemId:number){
    this.mine.buyListItems = this.mine.buyListItems.filter(
      (item)=>{
        return item.id!=itemId;
      }
    )
    this.updateLocalCart();
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
