import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../../services/forgot-password.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  forgotPassword: FormGroup;
  message: string
   
  constructor(private forgotPasswordService: ForgotPasswordService) { }

  ngOnInit() {
    this.forgotPassword = new FormGroup({
      'email': new FormControl("", [Validators.required,Validators.email])
    })

  }
  onSubmit() {
    console.log(this.forgotPassword.value);

    this.forgotPasswordService.verifyMail(this.forgotPassword.value).subscribe((data: any) => {
      // this.message = '';
    
      
      if (data.message == 'Email id is not registered') {
        this.message = 'Your email is not registered with us' 
      }
     
      else if (data.message == "Recovery email send") {
        
        this.message = 'Please check your mail box'
      }
      
      else {
        this.message = 'There was some Error when sending Mail'
      }
    }
    )
  }
}
