import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SharedModule } from '../shared/shared.module';
import { ResetComponent } from './reset/reset.component';

import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { VerifyComponent } from './verify/verify.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, RegisterationComponent, ForgotComponent, ResetComponent, VerifyComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,ReactiveFormsModule,
    AuthenticationRoutingModule,
    HttpClientModule
  ]
})
export class AuthenticationModule { }
