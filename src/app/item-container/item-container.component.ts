import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../model/item';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute,private state:StateServiceService) {
  }
  resize(): void {
    this.itemsList=this.listaPiena.filter((i)=>{
      let condition : boolean = true;
      if(this.prezzoMin!=undefined && this.prezzoMin!=null && this.prezzoMin!=0){
        condition = condition && (i.price-i.price/100*i.discountPercentage )>=this.prezzoMin;
      }
      if(this.prezzoMax!=undefined && this.prezzoMax!=null){
        condition = condition && (i.price-i.price/100*i.discountPercentage )<=this.prezzoMax;
      }
      return condition;
    })
  }
  prezzoMin:number;
  prezzoMax:number;
  itemsList:Item[] = [];
  listaPiena:Item[];
  title:string = "OFFERTE";
  ngOnInit(): void {
    this.listaPiena=this.itemsList;
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        if(params['type'] == undefined || params['type'] == null || params['type'] == ""){
          this.state.refreshItemList(this.itemsList);
        }
        else {
          this.state.getByType(this.itemsList,params['type']);
          this.title = params['type'];
        }
      });
  }

}
