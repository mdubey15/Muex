import * as signalR from "@aspnet/signalr";
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component
  ({
  template: '<Chat></Chat>',
  templateUrl: './chat.component.html'
  })
export class ChatComponent{

connection:signalR.HubConnection;
user:string="";
message:string="";
messages:Array<string> = new Array<string>();
txtMessage:HTMLElement = document.getElementById("#txtMessage");
txtUser:HTMLElement=document.getElementById("#txtUser");

    constructor(){}

    ngOnInit() : void {
        this.connection= new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:44316/echo")
            .build();

        this.connection.on("sendMessage",(user,message)=>{
            this.messages.push(message);
            console.log('message retrieved', user, message);
        });

        this.connection.start().then(()=>console.log("connected"));
    }

    send() {
        
        this.connection.send("send",this.user,this.message);
        
    }

}