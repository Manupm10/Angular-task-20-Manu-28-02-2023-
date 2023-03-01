import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router,private authenticationService:AuthenticationService){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
    {
      let storedData=localStorage.getItem("login");    
      let logData    
      if(storedData!=null)
       {     
        logData= JSON.parse(storedData)  
        }
      
      let name=logData.name;    
      let password =logData.password;    
      console.log(name);    
      console.log(password);   
      let value=this.authenticationService.getUser();

      if(value){

        return true;

      }
      else{

        return false;
      }
  }
 
}
