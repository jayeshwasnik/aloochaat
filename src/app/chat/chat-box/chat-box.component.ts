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

  constructor(private cookieService:CookieService;) { }

  ngOnInit() {
  }

}