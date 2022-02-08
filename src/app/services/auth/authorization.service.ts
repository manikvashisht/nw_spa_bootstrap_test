import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private route: Router) { }

  // originally this method should call an IDP to get a token after authentication of a user
  // but hardcoding for purpose of Demo. 
  authenticateUser(userName: string, password:string){
    //console.log('Reached here with username and password ' + userName + password);
    if (userName === 'dummy' && password === 'password') {
      //console.log('inside');
      sessionStorage.setItem('authorizedUser', userName);
      this.route.navigate(['home']);
      return false;
    }else{
      return true;
    }
  }

  isUserLoggedIn(){
  //  console.log('something called this service');
    let user = sessionStorage.getItem('authorizedUser');
  //  console.log('user : ' + user);
    if(user !== null){
      return false;
    }else{
      return true;
    }
  }
}
