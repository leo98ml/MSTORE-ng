import { Component, OnInit } from '@angular/core';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  constructor(private state:StateServiceService) {
  }
  itemsList = []

  ngOnInit(): void {
    this.state.refreshItemList(this.itemsList)
  }

}
