  import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
// isLoading = false;
  constructor(private registrationService:RegistrationService) { }
public message:String=null;
registerationForm:FormGroup;



  ngOnInit() {

    this.registerationForm=new FormGroup({

'userName':new FormControl(null,Validators.required),
'passWord':new FormControl(null,[Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
'email':new FormControl(null,[Validators.required,Validators.email]),
'firstName':new FormControl(null,Validators.required),
'lastName':new FormControl(null,Validators.required)
    })
  }
  onSubmit(reg){
// this.isLoading = true;

      this.registrationService.registerationData(reg.value).subscribe(data=>{
        // this.isLoading =false
        if(data){
          // this.message="User saved";
          // console.log(this.message)
        }else{
          this.message="User Not Saved";
        }
      })
    
  }

}
