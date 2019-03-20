import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpService } from './services/http/http-service';
import { AuthService } from './services/authentication/auth';
import { MeetingService } from "src/app/core/services/meeting-request/meeting-req";
import { VirtualRoomService } from "src/app/core/services/virtualRoom/virtual-room";
import { WebSocketService } from './services/web-sockets/web-socket';
import { AuthGuard } from './guards/authGuard.guard';



@NgModule({
    declarations: [],
    exports: [
    ],
    providers: [
        HttpService,
        AuthService,
        MeetingService,
        VirtualRoomService,
        WebSocketService,
        AuthGuard
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        console.log('Core module constructor');
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
