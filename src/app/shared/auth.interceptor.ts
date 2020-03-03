import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request on its way');
    const authToken=this.auth.getToken();
    const authRequest=request.clone({
      headers:request.headers.set('Authorization',"Bearer"+authToken)
    })
    return next.handle(authRequest);
  
    
  }
}
