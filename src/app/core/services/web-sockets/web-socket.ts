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

    send(message: any): void {
        let speech = {
            id: '5c889bfcb8d5ed0004d679c5',
            message: message,
            sender: 'dummy',
            timestamp: new Date()
        }
        this.socket.emit('chat message', JSON.stringify(speech));
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
