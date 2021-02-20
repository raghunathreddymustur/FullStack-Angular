import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
export class BasicAuth{
  constructor(public msg:string){}
}
@Injectable({
  providedIn: 'root'
})

export class BackendAuthenticationService {

  constructor(private http:HttpClient) { }
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
    sessionStorage.removeItem('token')
    
  }

  getJWTAuthenticatedFromBack(username:string,password:string){
    
    return this.http.post<any>("http://localhost:8080/authenticate",{username,password}).pipe(
      map(
        
          data=> {
            sessionStorage.setItem('auth',username)
            sessionStorage.setItem('token',`Bearer ${data.token}`)
            
            return data;
          }
        
      )
    )
    
  }
  getAuthenticatedFromBack(username:string,password:string){
    let basicAuth='Basic '+window.btoa(username+':'+password)

    let headers=new HttpHeaders({
      Authorization:basicAuth
    })
    return this.http.get<BasicAuth>("http://localhost:8080/basicAuth",{headers}).pipe(
      map(
        
          data=> {
            sessionStorage.setItem('auth',username)
            sessionStorage.setItem('token',basicAuth)
            
            return data;
          }
        
      )
    )
    
  }
  getAuth()
  {
    return sessionStorage.getItem("auth");
  }
  getToken()
  {
    if(this.getAuth())
    {
      return sessionStorage.getItem("token")
    }
    return null;
  }
  
}
