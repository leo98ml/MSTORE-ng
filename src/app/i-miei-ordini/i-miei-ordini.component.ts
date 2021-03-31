import { Component, OnInit } from '@angular/core';
import { Fattura } from '../model/fattura';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-i-miei-ordini',
  templateUrl: './i-miei-ordini.component.html',
  styleUrls: ['./i-miei-ordini.component.css']
})
export class IMieiOrdiniComponent implements OnInit {
  
  fatture:Fattura[]= [];
  constructor( private state : StateServiceService) {}

  ngOnInit(): void {
   this.state.retriveFatture(this.fatture);
  }
}
