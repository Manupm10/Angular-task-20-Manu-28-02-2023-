import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private router:Router,private authenticationService:AuthenticationService){}

public user= {
    name:'',
    password:'',
    }

    onSubmit()
    {    
      this.authenticationService.setUser(this.user);
      this.router.navigate(['./home']);  
    }

}
