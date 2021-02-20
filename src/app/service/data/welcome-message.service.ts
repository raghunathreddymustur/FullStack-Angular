import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
export class Message
{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})

export class WelcomeMessageService {

  constructor(private http:HttpClient) { }
  getMessage(){
    return this.http.get<Message>("http://localhost:8080/hello")
    
  }
  getMessageWithParam(name:string)
  {
    let basicAuth=this.createBasicAuthentication()
    let headers=new HttpHeaders({
      Authorization:basicAuth
    })
    return this.http.get<Message>(`http://localhost:8080/hello/${name}`,{headers})
  }
  createBasicAuthentication()
  {
    let username='raghu@gmail.com'
    let password='raghu'
    let basicAuth='Basic '+window.btoa(username+':'+password)
    return basicAuth

  }
}
