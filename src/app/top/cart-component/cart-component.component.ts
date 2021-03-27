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

  items:Item[];


  constructor(private router:Router, private state:StateServiceService,private remote:RemoteService) { }

  ngOnInit(): void {
    this.items = [];
    this.items.concat(this.remote.getItemsById(this.state.cartItems));
  }

  updateLocalCart():void{
    let itemsId:number[] = [];
    this.items.forEach(element => {
      itemsId.push(element.id)
    });
    this.state.persistCart(itemsId);
  }

  remove(itemId:number){
    this.items = this.items.filter(
      (item)=>{
        return item.id!=itemId;
      }
    )
    this.updateLocalCart();
  }
  
  add(item:Item){
    this.items.push(item);
    this.updateLocalCart();
  }

  acquista():void{
    this.state.buyListItems=this.items;
    this.router.navigate(["acquista"]);
  }
}
