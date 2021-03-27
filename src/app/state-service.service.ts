import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Item } from './model/item';
import { RemoteService } from './remote.service';


@Injectable({
  providedIn: 'root'
})
export class StateServiceService {
  logout() {
    this.remote.invalidateSession(this.sessionToken);
    this.sessionToken = "nope";
    this.isUserLogged = false;
    this.cookies.set("m-store-cookie-session-token",this.sessionToken)
  }
  login(username:string,password:string):boolean {
    let ret = false;
    let session : string = this.remote.login(username,password);
    if(session != null){
      this.isUserLogged = true;
      this.sessionToken = session;
      this.cookies.set("m-store-cookie-session-token",session)
      ret=true;
    }
    return ret;
  }
  product: string;
  constructor(private cookies: CookieService, private remote:RemoteService) { }

  init() {
    this.cartItems = this.cookies.get("m-store-cookie-id-cart-item").split(",");
    this.sessionToken = this.cookies.get("m-store-cookie-session-token");
    this.isUserLogged = this.remote.isSessionValid(this.sessionToken);
  }
  persistCart(itemsId: number[]) {
    let items:string = "";
    itemsId.forEach((element)=>{
      items += element + ","
    })
    if (items.length>0){
      items=items.substr(0,items.length-1);
    }
    this.cookies.set("m-store-cookie-id-cart-item",items)
  }
  data: Item;
  sessionToken: string;
  isUserLogged: boolean;
  cartItems: string[];
  buyListItems: Item[];
}
