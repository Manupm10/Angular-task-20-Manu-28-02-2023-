import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public user= {
    name:'',
    password:'',
    };
    name:any;
    password:any;

    //getItem = localStorage.getItem('user');


  setUser(value:any){
    this.user.name=value.name;
    this.user.password=value.password;
    localStorage.setItem('login',JSON.stringify(this.user));
  }

  getUser(){
    this.name=this.user.name;
    this.password=this.user.password;
    console.log(this.name);
    console.log(this.password);
    //this.getItem

    if(this.name=='user'&& this.password=='user123'){
      
      return true;
    }else{
      return false;
    }

  }
  getUserdata(){
    return this.user
  }

}
