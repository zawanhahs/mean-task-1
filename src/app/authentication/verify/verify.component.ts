import { Component, OnInit } from '@angular/core';
// import { VerifyService } from '../../services/verify.service';
import { ActivatedRoute } from '@angular/router';
import { VerifyService } from 'src/app/services/verify.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
token:string
  constructor(public route:ActivatedRoute, private verifySrc:VerifyService) { 
  this.token=route.snapshot.params.token;
    console.log(this.token);
    
  }

  ngOnInit(): void {
    // localStorage.setItem('token',this.token);
    this.verifySrc.verifyFunc(this.token).subscribe(data=>{
      if(data){
        console.log("user data: ",data);
      }
      else{
        console.log("error occured");
      }
    })
  }
  
  
}
