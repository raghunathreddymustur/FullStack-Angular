import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcome_string:string=''
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.welcome_string=this.route.snapshot.params['name']
  }
  

}
