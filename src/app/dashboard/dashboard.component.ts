import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeetingService } from "../core/services/meeting-request/meeting-req";
import { VirtualRoomService } from "../core/services/virtualRoom/virtual-room";
import { IdDetails } from "../shared/models/auth-model";
import { createVirtualRoom } from "../shared/models/virtualRoom";
import { CancelMeeting } from "../shared/models/auth-model";
import { AuthService } from "../core/services/authentication/auth";
import { Router } from "@angular/router";
import { JoinVirtualRoom } from "../shared/models/virtualRoom";
import { GetMeetingData, MeetingData ,EditMeetingData } from "../shared/models/meeting.model";
import { ForgotPasswordService } from '../core/services/forgot-password/forgot-password.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  editMeetingId: any;
  editReq: FormGroup;
  editRequest: any;
  token: string;
  emailData: IdDetails;
  cancelData: CancelMeeting;
  createVRoom: createVirtualRoom;
  data: MeetingData;
  createRoomData: Array<Object> = [];
  randomToken: string = "";
  participantEmail: Array<Object>;
  participantEmailModel: any = {};
  editparticipatemail: any = {};
  @Input() public user;
  formatsDateTest: string[] = ["dd/MM/yyyy"];
  dateNow: Date = new Date();
  dateNowISO = this.dateNow.toISOString();
  isVirtualRoomCreated: boolean = false;
  joinVirtualRoomReqObj: JoinVirtualRoom;
  meetingId: any;
  selectedDate: any;
  activeMeetings: Array<Object> = [];
  todaysDate: any;
  emailArr: any = [];
  organizerEmail: string;
  editMeetingData: EditMeetingData;
  editAgenda: string;
  editlocation: string;
  Editparticipant: Array<string> = [];
  editAllData: Array<Object> = [];
  editMeetingFlag: boolean = false;
  confirmCancelMeeting: any = {};
  displayCreateMeetingForm: boolean = false;
  newPassword: string;
  username: string = sessionStorage.getItem('UserName');

  constructor(
    public meetService: MeetingService,
    public virtualService: VirtualRoomService,
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private forgotPasswordService: ForgotPasswordService
  ) {
    this.editMeetingData = new EditMeetingData();
    this.emailData = new IdDetails();
    this.cancelData = new CancelMeeting();
    this.joinVirtualRoomReqObj = new JoinVirtualRoom();
    this.createVRoom = new createVirtualRoom();
    this.data = new MeetingData();
    this.todaysDate = new Date().toISOString();
    this.todaysDate = this.todaysDate.split("T");
    this.selectedDate = this.todaysDate[0];
    this.organizerEmail = sessionStorage.getItem("emailID");
  }

  ngOnInit() {
    this.getMeeting();
    //console.log(this.data);
  }

  /**
   * Gets all meeting
   */
  getMeeting() {
    this.emailData.email = sessionStorage.getItem("emailID");
    this.activeMeetings = [];
    //console.log(this.emailData);
    this.meetService.getData(this.emailData).then(
      (res: any) => {
        if (res.status == 'C') {
          this.data.meetingData = res.meetings;
          console.log("Get all meetings ", this.data.meetingData);
          this.data.meetingData.forEach(meeting => {
            if (meeting.status == "n") {
              this.activeMeetings.push(meeting);
            }
          });
          console.log("Active Meetings:", this.activeMeetings);
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
    this.router.navigate(["/authentication/login"]);
  }

  /**
   * Confirm cancel function giving selected instance data to modal popup
   * @param meeting 
   */
  confirmCancel(meeting) {
    this.confirmCancelMeeting = meeting;
    // console.log('Confirm Cancel', meeting);
  }

  /**
   * Cancels meeting
   * @param cancelMeeting 
   */
  cancel(cancelMeeting) {
    this.cancelData.id = this.confirmCancelMeeting._id;
    this.cancelData.status = "n";
    this.meetService.cancelData(this.cancelData).then(
      (res: any) => {
        if (res.status == 'C') {
          alert('Meeting Cancelled');
          this.getMeeting();
        }
        else {
          console.log('Cancel Meeting error');
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  generateRandomNumber() {
    this.randomToken = Math.random()
      .toString(36)
      .substring(2);
    console.log("random", this.randomToken);
  }
  sendDetailsToTokenModal(meetingData: any) {
    console.log("sendDetailsToTokenModal", meetingData);
    this.meetingId = meetingData._id;
    this.joinVirtualRoomReqObj.id = meetingData._id;
    this.joinVirtualRoomReqObj.email = meetingData.organizerEmail;
  }
  joinVirtualRoom(joinVirtualRoomReqObj: JoinVirtualRoom) {
    debugger;
    console.log("meetingId", this.meetingId);
    console.log("joinVirtualRoomReqObj", this.joinVirtualRoomReqObj);
    this.virtualService.joinVirtualRoom(this.joinVirtualRoomReqObj).then(
      (res: any) => {
        if (res.status == "C") {
          console.log(res);
          this.virtualService.setMeetingId(this.meetingId)
          if (res) this.router.navigate(["/speechRecognition"]);
        } else {
          console.log(res.error[0].msg);
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  createRoom(cancelMeeting) {
    console.log("cancelMeeting", cancelMeeting);
    this.generateRandomNumber();
    this.createVRoom.id = cancelMeeting._id;
    this.createVRoom.token = this.randomToken;
    console.log("random token", this.randomToken);
    console.log(this.createVRoom);
    this.virtualService.createVirtualRoom(this.createVRoom).then(
      (res: any) => {
        if (res.status == 'C') {
          this.createRoomData = res;
          this.getMeeting();
          console.log("create room response ", this.createRoomData);
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
  addParticipant(email) {
    this.editRequest.editEmail.reset();
    this.Editparticipant.push(email);
    // this.valrticipant.push(email)
    // this.validateParticipantEmail()
  }

  removeParticipant(email) {
    this.Editparticipant.splice(this.Editparticipant.indexOf(email))
    console.log("pop array", this.Editparticipant);
    this.validateParticipantEmail();
  }
  validateParticipantEmail() {
    debugger
    console.log(this.Editparticipant.length == 0);
    if (this.editReq) {
      debugger
      if (this.Editparticipant.length == 0) {
        this.editReq.controls.editEmail.setErrors({ required: true });
      } else {
        this.editReq.controls.editEmail.setErrors( null );
      }
    }
  }

  editMeeting(editmodeldata) {
    this.editMeetingFlag = true;
    this.editparticipatemail = editmodeldata;
    this.Editparticipant = editmodeldata.participantEmail
    this.editmeetingForm(editmodeldata);
    this.validateParticipantEmail()
    this.editMeetingId = editmodeldata._id;
    console.log("date format",editmodeldata.startTime);
    this.Editparticipant = editmodeldata.participantEmail;
    // console.log("edit part mail",this.editparticipatemail);
    // console.log(this.editparticipatemail)
  }

  editmeetingForm(editmodeldata) {
    console.log(editmodeldata)
    debugger
    this.editReq = this.fb.group({
      agenda: [ editmodeldata.agenda,[Validators.required, Validators.maxLength(40)]],
      location: [editmodeldata.location, Validators.required],
      orgEmail: [this.organizerEmail],
      editEmail: ['', this.validateParticipantEmail()],
      dateInput: [editmodeldata.meetingDate, Validators.required],
      stime: [editmodeldata.startTime, Validators.required],
      etime: [editmodeldata.endTime, Validators.required]
    });
    this.editRequest = this.editReq.controls;
    console.log(this.editReq);
  }

  onEditSubmit() {
    debugger
    const endTime = this.editReq.value.etime.hour + ":" +this.editReq.value.etime.minute + ":" + this.editReq.value.etime.second;
    const startTime = this.editReq.value.stime.hour + ":" + this.editReq.value.stime.minute + ":" + this.editReq.value.stime.second;
    this.editMeetingData.participantEmail = this.Editparticipant;
    this.editMeetingData.organizerEmail = this.organizerEmail;
    this.editMeetingData.meetingDate = this.editReq.value.dateInput;
    this.editMeetingData.endTime = endTime;
    this.editMeetingData.startTime = startTime;
    this.editMeetingData.agenda = this.editReq.value.agenda;
    this.editMeetingData.location = this.editReq.value.location;
    this.editMeetingData.id = this.editMeetingId;
    console.log("edit data",this.editMeetingData);
    this.meetService.editData(this.editMeetingData).then(
      (res: any) => {
        this.getMeeting();
        console.log("edit service", res);       
      },
      (err: any) => {
        console.log("edit service", err);
      }
    );
  }
  objectFromCreateMeetingSuccess(event){
    console.log(event)
    if(event.meetingCreated){
      this.displayCreateMeetingForm =false
      this.getMeeting()
    }
  }

  /**
   * Resets user password
   */
  resetPassword() {
    let payload = {
      email: sessionStorage.getItem('emailID'),
      password: this.newPassword
    }
    // console.log('Reset Password Test');
    this.forgotPasswordService.resetPassword(payload).then(res => {
      if(res.status == 'C') {
        console.log('Reset password successfull');
      }
      else {
        alert(res.error[0].msg);
        console.log('Reset password is falied');
      }
    });
  }
}