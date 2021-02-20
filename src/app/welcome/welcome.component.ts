import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeMessageService } from '../service/data/welcome-message.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  welcome_string:string=''
  constructor(private route:ActivatedRoute,private DS:WelcomeMessageService) { }

  ngOnInit(): void {
    this.welcome_string=this.route.snapshot.params['name']
  }
  getWelcomeMessage(){
    console.log(this.DS.getMessage());
    this.DS.getMessage().subscribe(
      response=>this.handleResponse(response),
      error=>this.handleError(error)
    );
  }
  getWelcomeMessageWithParam(){
    console.log(this.DS.getMessage());
    this.DS.getMessageWithParam("raghu").subscribe(
      response=>this.handleResponse(response),
      error=>this.handleError(error)
    );
  }
  handleResponse(response:any)
  {
    this.welcome_string=response.message
  }
  handleError(error:any)
  {
    console.log(error.error.message)
  }

}
