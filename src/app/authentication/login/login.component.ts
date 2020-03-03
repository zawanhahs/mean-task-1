import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  loginForm: FormGroup;
  public msg: String;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(""),
      'passWord': new FormControl("")
    })
  }

  onSubmit(loginForm) {
   
    console.log(loginForm.value);
    
    this.loginService.userLogin(loginForm.value).subscribe((data: any) => {
      // console.log('inside data');
      // console.log(data);
      
      this.msg = data.message;
        // console.log(this.msg);
      
      if (this.msg == 'sucessful login') {
        this.message='login successfully'
        localStorage.setItem('token',data.token)
       // this.router.navigateByUrl('/registration')x
      }
      else if (this.msg == 'invalid password') {
        this.message = 'Incorrect password!';
      }
      else if (this.msg == 'user dont exist') {
        this.message = 'User doesn\'t exist!';
      }

    },
    error => {
      console.log(error);
    });
  }

}
