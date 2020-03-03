import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
// import {Registration}from'../userModels/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

   registerationData(registerData){
    //  console.log(registerData);
    return  this.http.post('http://localhost:8000/user/registration',registerData)
   }

}
