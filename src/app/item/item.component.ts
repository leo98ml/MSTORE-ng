import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from "../model/item";
import { RemoteService } from '../remote.service';
import { StateServiceService } from "../state-service.service"
  


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item:Item;

  purple:String = "primary"

  goTo(item:Item):void{
    this.state.data=item;
    this.router.navigate(["show"])
  }
  mine:RemoteService;
  constructor(private state:StateServiceService,private router:Router,private remote:RemoteService) {
    this.mine=remote;
   }

  ngOnInit(): void {
  }

}
