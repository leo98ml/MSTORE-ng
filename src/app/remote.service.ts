import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fattura } from './model/fattura';
import { Item } from './model/item';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  constructor(private http:HttpClient) { }

  // url:string = "http://localhost:8080/MStore/"
  url:string = "https://841ffd67bd1a.ngrok.io/MStore/"
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })};

  async getFattureByToken(sessionToken: string) {
    return await  this.http.get<Fattura[]>(this.url+"getFattureByToken?token="+sessionToken,this.httpOptions).toPromise();
  }
  async getItemsById(cartItems: string[]) {
    let q : string = "getItemsById?dummy=0";
    cartItems.forEach((e)=>{q += "&id=" + e})
    return await this.http.get<Item[]>(this.url+q,this.httpOptions).toPromise();
  }
  async buy(itemsId: number[], sessionToken: string) {
    let q : string = "buy?token=" +sessionToken;
    itemsId.forEach((e)=>{q += "&id=" + e})
    return await this.http.get<boolean>(this.url+q,this.httpOptions).toPromise();
  }
  async getByType(type:string) {
    return await this.http.get<Item[]>(this.url+"getProdotti?type="+type,this.httpOptions).toPromise();
  }
  async getProdDiscount(sessionToken: string) {
    return await this.http.get<Item[]>(this.url+"getProdottiOfferta",this.httpOptions).toPromise();
  }
  async getUserByToken(sessionToken: string):Promise<User>  {
    return await this.http.post<User>(this.url+"getUserByToken",JSON.stringify({
      "token":sessionToken
    }),this.httpOptions).toPromise();
  }
  async regiter(user: User) {
    return await this.http.post<string>(this.url+"addCostumer",
    JSON.stringify(user),this.httpOptions).toPromise();
  }
  async login(username: string, password: string):Promise<string> {
    return await this.http.post<string>(this.url+"login",JSON.stringify({
      "email":username,
      "password":password
    }),this.httpOptions).toPromise();
  }
}
