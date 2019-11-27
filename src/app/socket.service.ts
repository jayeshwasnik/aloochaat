import { Injectable } from '@angular/core';

//importing socket.io-client is being added
import * as io from 'socket.io-client';
import { Observable } from "rxjs/Observable";

import {Cookie} from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import {ChatModule} from './chat/chat.module';

//to use http params
import{HttpHeaders,HttpParams} from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 

// @Injectable({
//   providedIn:'root'
// })
@Injectable()

export class SocketService {

  private url='https://chatapi.edwisor.com';
private socket;


  constructor(public httpClient:HttpClient) {
    //here the connection is created in socket io
    this.socket=io.connect(this.url);
   }

    //listening to verify user event
   public verifyUser=()=>{
     //below we are creating a observable instance observer
     return Observable.create((observer)=>{
       //connecting the socket to verifyuser event,and executing callback function using the data we get from event;also data is just a random name for variable,it can be anything
       this.socket.on('verifyUser',(data)=>{
         //pushing the data to the subscribers using observer.next
         observer.next(data);

       })//end socket

     });//end observable
   }//end verify user


//listening to onlineUserList event
public onlineUserList=()=>{
     //below we are creating a observable instance observer
     return Observable.create((observer)=>{
       //connecting the socket to verifyuser event,and executing callback function using the data we get from event
       this.socket.on('online-user-list',(userList)=>{
         //pushing the data to the subscribers using observer.next
         observer.next(userList);

       })//end socket

     });//end observable
   }//end function


public disconnectedSocket=()=>{
     //below we are creating a observable instance observer
     return Observable.create((observer)=>{
       //connecting the socket to verifyuser event,and executing callback function using the data we get from event
       this.socket.on('disconnect',()=>{
         //pushing the data to the subscribers using observer.next
         observer.next();

       })//end socket

     });//end observable
   }//end function 


//events to be emitted

public setUser=(authToken)=>{
this.socket.emit("set-user",authToken);
}//end setUser



//error handling
 private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

   

}