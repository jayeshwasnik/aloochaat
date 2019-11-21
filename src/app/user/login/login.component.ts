import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service.ts';
import { ActivatedRoute, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

//for toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email;
  public password;

  constructor(private _route: ActivatedRoute,private cookie:Cookie, private router: Router, public appService: AppService,private toastr:ToastrService) { }

  ngOnInit() {
  }

public goToSignUp(){
this.router.navigate(['signup']);

}

public signinFunction(){
let data={email:this.email,
          password:this.password}

this.appService.userLogin(data).subscribe(apiResponse=>{
  if (apiResponse.status===200) 
  {this.toastr.success("Login Succesful");}

console.log(apiResponse);
//for setting cookies
Cookie.set('authToken',apiResponse.data.authToken);
Cookie.set('receiverId', apiResponse.data.userDetails.userId);
Cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
//setting the data in local storage
this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
},




error=>{this.toastr.error("there was an error")});


}

}