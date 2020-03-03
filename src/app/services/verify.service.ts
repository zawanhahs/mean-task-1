import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http:HttpClient) { }
  verifyFunc(token:any){
    return this.http.post("http://localhost:8000/verify",token);
  }
}
