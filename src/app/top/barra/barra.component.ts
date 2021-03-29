import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateServiceService } from 'src/app/state-service.service';
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  mine:StateServiceService
  constructor(private router:Router,private state:StateServiceService) { 
    this.mine=state;
  }

  ngOnInit(): void {
  }

  goHome(){
    this.state.product="offerte";
    this.router.navigate([""]);
  }
  logoutAndGoHome(){
    this.state.logout();
    this.goHome();
  }
  goAnalytics(){
    this.router.navigate(["i-miei-ordini"]);
  }
  goAnagrafica(){
    this.router.navigate(["anagrafica"])
  }
  goRegister(){
    this.router.navigate(["register"])
  }
  goLogin(){
    this.router.navigate(["login"])
  }
  goProduct(type:string){
    this.state.product=type;
    this.router.navigate(["listaProdotti"])
  }
}
