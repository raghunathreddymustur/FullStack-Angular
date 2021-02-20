import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAuthenticationService } from '../service/backend-basic-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="abc@gmail.com"
  password:string="abc"
  errorMessage:string="invalid pass"
  invalidLogin=false
  constructor(private router:Router,private BAS:BasicAuthenticationService,private BackendAuth:BackendAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin(){
    console.log(this.username)
    if(this.BAS.authenticate(this.username,this.password))
    {
      this.invalidLogin=false
      this.router.navigate(['welcome',this.username])
    }
    else
    {
      this.invalidLogin=true
    }
  }
  handleLoginFromBackend(){
    this.BackendAuth.getAuthenticatedFromBack(this.username,this.password).subscribe(
      data=>{
        console.log(data);
        this.invalidLogin=false
        this.router.navigate(['welcome',this.username])

      },
      error=>{
        console.log(error);
        this.invalidLogin=true
      }
    )
    
  }
  handleLoginFromJWTBackend(){
    this.BackendAuth.getJWTAuthenticatedFromBack(this.username,this.password).subscribe(
      data=>{
        console.log(data);
        this.invalidLogin=false
        this.router.navigate(['welcome',this.username])

      },
      error=>{
        console.log(error);
        this.invalidLogin=true
      }
    )
    
  }
}
