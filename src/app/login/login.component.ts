import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = "";
  password:string = "";

  constructor(private state:StateServiceService,private router:Router) { }
  login(){
    this.state.login(this.email,this.password);
  }
  ngOnInit(): void {
  }

}
