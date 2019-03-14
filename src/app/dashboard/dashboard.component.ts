import { Component, OnInit, Input } from "@angular/core";
import { MeetingService } from "../core/services/meeting-request/meeting-req";
import { VirtualRoomService } from "../core/services/virtualRoom/virtual-room";
import { IdDetails } from "../shared/models/auth-model";
import { createVirtualRoom } from "../shared/models/virtualRoom";
import { CancelMeeting } from "../shared/models/auth-model";
import { AuthService } from "../core/services/authentication/auth";
import { Router } from "@angular/router";
import { JoinVirtualRoom } from "../shared/models/virtualRoom";
import { GetMeetingData, MeetingData } from "../shared/models/meeting.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  token:string
  emailData: IdDetails;
  cancelData: CancelMeeting;
  createVRoom : createVirtualRoom;
  data: MeetingData;
  createRoomData : Array<Object> = [];
  randomToken : string = "";
  participantEmail: Array<Object>;
  participantEmailModel: any = {};
  @Input() public user;
  formatsDateTest: string[] = ["dd/MM/yyyy"];
  dateNow: Date = new Date();
  dateNowISO = this.dateNow.toISOString();
  isVirtualRoomCreated: boolean = false
  joinVirtualRoomReqObj: JoinVirtualRoom;
  meetingId: any;
  activeMeetings: Array<Object> = [];
  displayCreateMeetingForm: boolean = false;

  constructor(
    public meetService: MeetingService,
    public virtualService: VirtualRoomService,
    private auth: AuthService,
    private router: Router
  ) {
    this.emailData = new IdDetails();
    this.cancelData = new CancelMeeting();
    this.joinVirtualRoomReqObj = new JoinVirtualRoom();
    this.createVRoom = new createVirtualRoom();
    this.data = new MeetingData();
  }

  ngOnInit() {
    this.getMeeting();
    //console.log(this.data);
  }
  
  getMeeting() {
    this.emailData.email = sessionStorage.getItem("emailID");
    this.activeMeetings = [];
    //console.log(this.emailData);
    this.meetService.getData(this.emailData).then(
      (res: any) => {
        if (res) {
          this.data.meetingData = res.meetings;
          console.log("Get all meetings ", this.data.meetingData);
          this.data.meetingData.forEach(meeting => {
            if(meeting.status == 'y') {
              this.activeMeetings.push(meeting);
            }
          });
          console.log('Active Meetings:', this.activeMeetings);
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  // model data
  participants(modeldata) {
    this.participantEmailModel = modeldata;
  }

  logout() {
    this.auth.isUserAuthenticated = false;
    this.router.navigate(["/authentication/register"]);
  }
  cancel(cancelMeeting) {
    this.cancelData.id = cancelMeeting._id;
    this.cancelData.status = "n";
    this.meetService.cancelData(this.cancelData).then(
      (res: any) => {
        if (res) {
          this.getMeeting();
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  generateRandomNumber() {
    this.randomToken = Math.random().toString(36).substring(2);
    console.log("random", this.randomToken);
  }
  sendDetailsToTokenModal(meetingData:any ){
    console.log("sendDetailsToTokenModal",meetingData)
    this.meetingId=meetingData._id
    this.joinVirtualRoomReqObj.id = meetingData._id;
    this.joinVirtualRoomReqObj.email = meetingData.organizerEmail;
  }
  joinVirtualRoom(joinVirtualRoomReqObj: JoinVirtualRoom){
    debugger
    console.log("meetingId",this.meetingId)
    console.log("joinVirtualRoomReqObj",this.joinVirtualRoomReqObj)
    this.virtualService.joinVirtualRoom(this.joinVirtualRoomReqObj).then((res:any)=>{
      if(res.status == 'C') {
        console.log(res);
        if(res)
        this.router.navigate(["/speechRecognition"]);
      }
      else{
        console.log(res.error[0].msg);
      }
    },
    (err:any)=>{
      console.log(err)
    })
  }

  createRoom(cancelMeeting){
    console.log("cancelMeeting",cancelMeeting)
    this.generateRandomNumber();
    this.createVRoom.id = cancelMeeting._id;
    this.createVRoom.token = this.randomToken;
    console.log("random token",this.randomToken)
    console.log(this.createVRoom)
    this.virtualService.createVirtualRoom(this.createVRoom).then(
      (res: any) => {
        if (res) {
          this.createRoomData = res;
          console.log("create room response ",this.createRoomData);
          // this.data.meetingData.forEach(user=>{
          //   if(user._id == this.createVRoom.id){
          //     user['isVirtualRoomCreated'] = true
          //   }
          // })
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  getObjectFromCreateMeeting(data){
    console.log(data)
    if(data.meetingCreated){
      this.displayCreateMeetingForm = false;
      this.getMeeting();
    }
  }
}
