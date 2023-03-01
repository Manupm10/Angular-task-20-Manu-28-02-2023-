import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {


  constructor(private authenticationService:AuthenticationService){}
  user:any = {
    name:'',
    password:''
  };

  ngOnInit() {

    this.user=this.authenticationService.getUserdata();
    console.log('value',this.user);
    
  }



}
