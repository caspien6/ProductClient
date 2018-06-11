import { Component, OnInit } from '@angular/core';

import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

import { Message } from 'primeng/api';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public _hubConnection: HubConnection;
  private builder: HubConnectionBuilder = new HubConnectionBuilder();
  msgs: Message[] = [];

  constructor() { }

  ngOnInit(): void {
    this._hubConnection = this.builder.withUrl('http://localhost:54920/notify').build();
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('BroadcastMessage', (type: string, payload: string) => {
      this.msgs.push({ severity: type, summary: payload });
    });
  }

}
