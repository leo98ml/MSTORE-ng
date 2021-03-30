import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Item } from './model/item';
import { User } from './model/user';
import { RemoteService } from './remote.service';


@Injectable({
  providedIn: 'root'
})
export class StateServiceService {
  goneRight(){
    this.buyListItems=[];
    this.router.navigate(["i-miei-ordini"]);
  }
  goneWrong(){
    this.erroreAcquista= "C'è stato un problema con l'ordine";
  }
  lenChanged:EventEmitter<number> = new EventEmitter();
  erroreAcquista:string=null;
  buy(itemsId: number[]) {
    this.remote.buy(itemsId,this.sessionToken).then((s) => {
      if(s==true){
        this.goneRight();
      } else {
        this.goneWrong();
      }
    }, (r) => {
      if(r.error.text==true){
        this.goneRight();
      } else {
        this.goneWrong();
      }
    });

  }
  getByType(itemsList: Item[], type: string) {
    this.remote.getByType(type).then((s) => {
      itemsList.length=0;
      s.forEach((i)=>{itemsList.push(i)})
    }, (r) => {
      console.log("porca troia")
    });
  }
  refreshItemList(itemsList: Item[]) {
    this.remote.getProdDiscount(this.sessionToken).then((s) => {
      itemsList.length=0;
      s.forEach((i)=>{itemsList.push(i)})
    }, (r) => {
      console.log("porca troia")
    });
  }
  userLogged:User;
  getUserByToken() {
    this.remote.getUserByToken(this.sessionToken).then((s) => {
      if (s != null && s != undefined) {
        this.userLogged=s;
      }
    }, (r) => {
      console.log("porca troia")
    });
  }
  
  register(user: User) {
    let session: string;
    this.remote.regiter(user).then((s) => {
      if (s != null && s != undefined) {
        this.isUserLogged = true;
        this.sessionToken = s;
        this.router.navigate([""]);
      }
    }, (r) => {
      session = r.error.text;
      if (session != null && session != undefined) {
        this.isUserLogged = true;
        this.sessionToken = session;
        this.router.navigate([""]);
      }
    });
  }
  logout() {
    this.sessionToken = "nope";
    this.isUserLogged = false;
  }
  login(username: string, password: string) {
    let ret = false;
    let session: string;
    this.remote.login(username, password).then((s) => {
      if (s != null && s != undefined) {
        this.isUserLogged = true;
        this.sessionToken = s;
        ret = true;
        this.router.navigate([""]);
      }
    }, (r) => {
      session = r.error.text;
      if (session != null && session != undefined) {
        this.isUserLogged = true;
        this.sessionToken = session;
        ret = true;
        this.router.navigate([""]);
      }
    });
  }
  product: string;
  constructor(private router: Router, private cookies: CookieService, private remote: RemoteService) { }

  init() {
    this.cartItems = this.cookies.get("m-store-cookie-id-cart-item").split(",");
    this.remote.getItemsById(this.cartItems).then((s) => {
      if (s != null && s != undefined) {
        this.buyListItems=s;
      }
    }, (r) => {
      this.buyListItems=[];
    });

  }
  persistCart(itemsId: number[]) {
    let items: string = "";
    itemsId.forEach((element) => {
      items += element + ","
    })
    if (items.length > 0) {
      items = items.substr(0, items.length - 1);
    }
    this.cookies.set("m-store-cookie-id-cart-item", items, undefined, undefined, undefined, undefined, "Strict")
  }

  add(item:Item){
    this.buyListItems.push(item);
    let itemsId:number[] = [];
    this.buyListItems.forEach(element => {
      itemsId.push(element.id)
    });
    this.persistCart(itemsId)
  }
  data: Item;
  sessionToken: string;
  isUserLogged: boolean =false;
  cartItems: string[];
  buyListItems: Item[] = [];
}
