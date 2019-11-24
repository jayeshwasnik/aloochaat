import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Observable } from "rxjs/Observable";

import {Cookie} from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

//to use http params
import{HttpHeaders,HttpParams} from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 

@Injectable()
export class SocketService {

  private url='https://chatapi.edwisor.com';
private socket;


  constructor(public httpClient:HttpClient) {
    this.socket=io.connect(this.url);
   }


   

}