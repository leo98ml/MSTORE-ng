import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {
  login(username: string, password: string): string {
    // throw new Error('Method not implemented.');
    return null;
  }
  invalidateSession(sessionToken: string) {
    // throw new Error('Method not implemented.');
  }
  getItemsById(cartItems: string[]): ConcatArray<import("./model/item").Item> {
    return null
    // throw new Error('Method not implemented.');
  }
  getItemById(element: string): import("./model/item").Item {
    return null
    // throw new Error('Method not implemented.');
  }
  isSessionValid(sessionToken: string): boolean {
    return null
    // throw new Error('Method not implemented.');
  }

  constructor() { }
}
