import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service.ts';
import { ActivatedRoute, Router } from '@angular/router';

//for toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 public firstName;
     public password;
    public    lastName;
      public   email;
     public   mobileNumber;


  constructor(private _route: ActivatedRoute, private router: Router, public appService: AppService,private toastr:ToastrService) { }

  ngOnInit() {
  }

  public goToSignIn(){
    this.router.navigate(['/']);
  }

  public signupFunction=()=>{
    let data={
      firstName:this.firstName,
     password:this.password,
    lastName:this.lastName,
    email:this.email,
      mobileNumber:this.mobileNumber
    }
    this.appService.userSignup(data).subscribe((apiResponse) => {

          console.log(apiResponse);

          if (apiResponse.status === 200) {

            this.toastr.success('Signup successful');

            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          } else {

            this.toastr.error(apiResponse.message);

          }

        }, (err) => {

          this.toastr.error('some error occured');

        });

  

  }

}