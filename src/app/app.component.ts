import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { StateServiceService } from './state-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MSTORE';
  constructor(private router:Router,private state:StateServiceService){
    state.init();
  }
  onAboutUs():void{
    this.router.navigate(["about"]);
  }
}
