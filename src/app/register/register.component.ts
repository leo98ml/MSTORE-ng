import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User = new User();
  confirmedPassword:string ="";
  submitted=false;

  constructor(private router:Router,
    private state:StateServiceService) { 
  }

  ngOnInit(): void {
  }

  goLogin(){
    this.router.navigate(["login"]);
  }
  submit(){
    this.submitted = true;
    this.state.register(this.user);
  }

}
