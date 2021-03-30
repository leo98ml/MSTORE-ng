import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute,private state:StateServiceService) {
  }
  itemsList = []
  title:string = "OFFERTE";
  ngOnInit(): void {
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
