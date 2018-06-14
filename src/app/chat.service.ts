import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface MessageInterface
{
    Type: string;
    Payload :string;
}

@Injectable()
export class ChatService {

  baseUrl: string = "http://localhost:54920/api/v2.0/message"

  constructor(private http: HttpClient) { }

  sendMessage(msg: MessageInterface): Observable<void>{
    let header = new HttpHeaders();
    header = header.set('Authorization','Bearer '+ localStorage.getItem('auth_token'));
    header = header.set('accept','text/plain');
    header = header.set('Content-Type','application/json-patch+json');
    

    return this.http.post<void>(this.baseUrl, msg, {headers:header});
  }

}
