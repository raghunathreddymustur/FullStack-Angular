import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendAuthenticationService } from '../backend-basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private backendAuth:BackendAuthenticationService) { }
  intercept(request:HttpRequest<any>,next:HttpHandler)
  {
    // let username='raghu@gmail.com'
    // let password='raghu'
    let basicAuth=this.backendAuth.getToken();
    let username=this.backendAuth.getAuth();
    if(basicAuth && username){
      request=request.clone({
        setHeaders:{
          Authorization:basicAuth
        }
      });
    
    }
    return next.handle(request)
  }
}
