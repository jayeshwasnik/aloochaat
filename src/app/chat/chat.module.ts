import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chat-box/chat-box.component';
import {RouterModule,Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild([ 
      { path: 'chat', component: ChatBoxComponent }
    ])
  ],
  declarations: [ChatboxComponent]
})
export class ChatModule { }