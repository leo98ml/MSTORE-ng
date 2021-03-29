import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './model/item';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  
  
  
  url:string = "http://localhost:8080/"
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Content-Length': '10000000000000',
    'Host':'mine'
  })};
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
  invalidateSession(sessionToken: string) {
    // throw new Error('Method not implemented.');
  }
  getItemsById(cartItems: string[]):Item[] {
    return null
    // throw new Error('Method not implemented.');
  }


  constructor(private http:HttpClient) { }
}
