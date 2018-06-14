import { Component, OnInit } from '@angular/core';

import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

import { Message } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MessageService } from 'primeng/components/common/messageservice';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public _hubConnection: HubConnection;
  private builder: HubConnectionBuilder = new HubConnectionBuilder();
  msgs: Message[] = [];
  private messageText: string;

  constructor(private msgService: MessageService, 
  private chatService: ChatService) { }

  ngOnInit(): void {
    this._hubConnection = this.builder.withUrl('http://localhost:54920/notify').build();
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('BroadcastMessage', (type: string, payload: string) => {
      this.msgService.add({ severity: type, summary: payload });
    });
    
  }

  sendMessage():void{
    this.chatService.sendMessage({Type: "info", Payload: this.messageText.toString()}).subscribe((res) => console.log(res),
    (err) => 1 == 1);
  }

}
