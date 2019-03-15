import { Injectable } from "@angular/core";
import { HttpService } from "../http/http-service";

@Injectable()
export class VirtualRoomService {
  meetingID: string;
  constructor(private http: HttpService) {}

  // create VirtualRoomService
  createVirtualRoom(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.httpPost("virtualRoom/new", data).then(
        res => {
          resolve(res);
        },
        err => {
          reject(err.error);
        }
      );
    });
  }

  // Join VirtualRoomService
  joinVirtualRoom(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.httpPost("virtualRoom/join", data).then(
        res => {
          resolve(res);
        },
        err => {
          reject(err.error);
        }
      );
    });
  }

  setMeetingId(ID: any){
    this.meetingID=ID
  }

  getMeetingId(){
    return this.meetingID;
  }
}
