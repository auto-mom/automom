export class CreateMeetingPostData { 
    participantEmail: Array<string>;
    organizerEmail: string;
    meetingDate: string;
    startTime: string;
    endTime: string;
    agenda: string;
    location: string;
}

export class GetMeetingData { 
    participantEmail: Array<string>;
    organizerEmail: string;
    meetingDate: string;
    startTime: string;
    endTime: string;
    agenda: string;
    location: string;
    isVirtualRoomCreated: boolean = false;
    _id: string;
    token: string;
    status: string
}

export class EditMeetingData {
    participantEmail: Array<string>;
    organizerEmail: string;
    meetingDate: string;
    startTime: string;
    endTime: string;
    agenda: string;
    location: string;
    id : string;
}

export class MeetingData {
    meetingData: GetMeetingData[];
}

export class EndMeeting{
    id : string;
}