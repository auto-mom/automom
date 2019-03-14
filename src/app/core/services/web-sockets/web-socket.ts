import { Injectable } from "@angular/core";
import * as socketIo from 'socket.io-client';
import { Observable } from "rxjs";
import { Message } from "src/app/shared/models/messages.model";
import { identifierModuleUrl } from "@angular/compiler";

const SERVER_URL = 'https://automom-dev.herokuapp.com/';

@Injectable()
export class WebSocketService {
    private socket;

    initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    send(data: any): void {
        console.log("data",data)
        this.socket.emit('chat message', JSON.stringify(data));
    }

    onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    onEvent(event: any): Observable<any> {
        return new Observable<any>(observer => { 
            this.socket.on(event, () => observer.next())
            .on('authenticated', () => {})
            .emit('authenticate', {
                token: sessionStorage.getItem('token')
            })
        });
    }
}
