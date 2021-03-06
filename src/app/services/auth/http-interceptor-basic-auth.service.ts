import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     let basicAuthString = 'Basic ' + window.btoa('dummy' + ':' + 'password');
      req = req.clone({
        setHeaders:{
          Authorization: basicAuthString
        }
      })
      return next.handle(req);
    //throw new Error('Method not implemented.');
  }
}
