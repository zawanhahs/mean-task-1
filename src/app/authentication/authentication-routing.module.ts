import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ResetComponent } from './reset/reset.component';
import { VerifyComponent } from './verify/verify.component';


const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:'forgot', component:ForgotComponent},
    {path:'register', component:RegisterationComponent},
    {path:'reset',component:ResetComponent},
    {path:'verify/:token',component:VerifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
