import { Component, OnInit } from '@angular/core';

import {SocketService} from './../../socket.service';

import {AppService} from './../../app.service';

import { ActivatedRoute, Router } from '@angular/router';
//import { Cookie } from 'ng2-cookies/ng2-cookies';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  public authToken:any;
  public userInfo:any;
  public recieverId:any;
  public recieverName:any;
  public userList:any[];
  public disconnectedSocket:boolean;

  constructor(public cookieService:CookieService,public socketService:SocketService,public router:Router ) {
    this.recieverId=this.cookieService.get('recieverId');
    this.recieverName=this.cookieService.get('recieverName');
    
   }

  ngOnInit() {
    this.authToken=this.cookieService.get('authToken');
    this.userInfo=this.AppService.getUserInfoFromLocalStorage();

    this.checkStatus();
    this.verifyUserConfirmation();
    this.getOnlineUserList();
  }


public checkStatus:any=()=>{
  if(this.cookieService.get('authToken')===undefined || this.cookieService.get('authToken')==='' || this.cookieService.get('authToken')===null){
    this.router.navigate(['/']);
    return false;
  }else{
return true;
  }
}

}