import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service.ts';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private _route: ActivatedRoute, private router: Router, public appService: AppService,private toastr:ToastrService) { }

  ngOnInit() {
  }

public goToSignUp(){
this.router.navigate(['signup']);

}

public signinFunction(){
let data={email:this.email,
          password:this.password}

this.appService.userLogin(data).subscribe(data=>{this.toastr.success("Login Succesful");
console.log(data)},
error=>{this.toastr.error("there was an error")});


}

}