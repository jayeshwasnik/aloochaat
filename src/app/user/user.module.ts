import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http'; 

//import { Cookie } from 'ng2-cookies/ng2-cookies';

//we are using forchild instead of forrrot because this is not a root module
@NgModule({
  imports: [
    CommonModule,HttpClientModule,BrowserAnimationsModule,ToastrModule.forRoot(),FormsModule,RouterModule.forChild([{path:'signup',component:SignupComponent}])
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }