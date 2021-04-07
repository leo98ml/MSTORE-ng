import { Component, OnInit} from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { RemoteService } from 'src/app/remote.service';
import { StateServiceService } from 'src/app/state-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{

  @Output() removeItemEvent = new EventEmitter<number>();
  @Input() item:Item;
  @Input() lista:Item[];
  badgeNum:number;
  update():void{
    this.badgeNum=0;
    this.lista.forEach(element => {
      if(element.id==this.item.id){
        this.badgeNum++;
      }
    });
  }
  mine:RemoteService;
  constructor(private router:Router ,private state:StateServiceService,private remote:RemoteService) { 
    this.mine = remote;
  }

  ngOnInit(): void {
    this.badgeNum=0;
    this.lista.forEach(element => {
      if(element.id==this.item.id){
        this.badgeNum++;
      }
    });
    this.state.added.subscribe(()=>{
      this.update();
    });
  }

  goTo():void{
    this.state.data=this.item;
    this.router.navigate(["show"])
  }

  remove(){
    this.removeItemEvent.emit(this.item.id);
  }

  howMany(){
    
    this.badgeNum=0;
    this.lista.forEach(element => {
      if(element.id==this.item.id){
        this.badgeNum++;
      }
    });
    return this.badgeNum
  }
}
