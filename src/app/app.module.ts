import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//for routing module
import {RouterModule,Routes} from '@angular/router';

import { ChatBoxComponent } from './chat/chat-box/chat-box.component';

//importing chat and usermodule 
import {UserModule} from './user/user.module';
import {ChatModule} from './chat/chat.module';


import { HttpClientModule } from '@angular/common/http'; 


import {CookieService} from 'ngx-cookie-service';

import {LoginComponent} from './user/login/login.component';
//for toastr
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppService } from './app.service';
import { SocketService } from './socket.service';

import { AppRoutingModule } from './app-routing.module';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@NgModule({
  imports:      [ BrowserModule,HttpClientModule,AppRoutingModule, BrowserAnimationsModule,ToastrModule.forRoot(),FormsModule,ChatModule,UserModule,RouterModule.forRoot([
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
   {path:'chat',component:ChatBoxComponent},
    {path:'*',component:LoginComponent},
    {path:'**',component:LoginComponent}
  ]) ],
  declarations: [ AppComponent,LoginComponent, HelloComponent,ChatBoxComponent],
  bootstrap:    [ AppComponent ],
  providers: [AppService,CookieService]
})
export class AppModule { }
