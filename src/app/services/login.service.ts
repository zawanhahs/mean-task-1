import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  userLogin(loginCredentials){
return this.http.post('http://localhost:8000/user/login',loginCredentials)    
  }

}
