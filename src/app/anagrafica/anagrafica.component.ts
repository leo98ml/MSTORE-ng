import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-anagrafica',
  templateUrl: './anagrafica.component.html',
  styleUrls: ['./anagrafica.component.css']
})
export class AnagraficaComponent implements OnInit {

  constructor(private state:StateServiceService) {
    this.mine = state;
   }
  submitted:boolean = false;
  mine:StateServiceService;
  ngOnInit(): void {
    this.state.getUserByToken();
  }

}
