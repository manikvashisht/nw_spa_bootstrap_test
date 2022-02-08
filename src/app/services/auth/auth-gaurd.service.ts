import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //This is just dummy process, in real project, the token in the cookie should be validated before bypassing the gaurd.
    if(sessionStorage.getItem('authorizedUser') !== null){
      return true;
    }else {
      this.route.navigate(['']);
      return false;
    }
  }
}
