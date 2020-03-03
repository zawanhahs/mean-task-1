import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http:HttpClient) { }
  verifyMail(mail){
    return this.http.get('http://localhost:8000/user/forgotPassword/'+mail.email);
  }
}
