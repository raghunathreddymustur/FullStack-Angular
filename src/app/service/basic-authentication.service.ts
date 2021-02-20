import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor() { }
  authenticate(username:string,password:string)
  {
    if(username==="abc@gmail.com" && password==="abc")
    {
      sessionStorage.setItem('auth',username)
      return true;
    }
    else
    {
      return false;
    }
  }
  isUserLogged()
  {
    let auth=sessionStorage.getItem('auth')
    return !(auth===null)
  }
  userLogout()
  {
    sessionStorage.removeItem('auth')
  }
}
