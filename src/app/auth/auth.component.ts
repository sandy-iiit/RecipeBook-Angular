import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})



export class AuthComponent {

  constructor(private authService:AuthService) {
  }

  isLoginMode=true;

  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode
  }

  onSubmit(authForm: NgForm) {

    if(!authForm.valid){
      return;
    }

    const email=authForm.value.email
    const password=authForm.value.password

    if(this.isLoginMode){

    }
    else{

    }

    this.authService.signup(email,password)
      .subscribe(data=>{
        console.log(data)
      ,error=>
        console.log(error)
      })
    console.log(authForm.value)
    authForm.reset()
  }
}
