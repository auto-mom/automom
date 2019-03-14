import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeetingRequestComponent } from './create-meeting-request.component';

describe('CreateMeetingRequestComponent', () => {
  let component: CreateMeetingRequestComponent;
  let fixture: ComponentFixture<CreateMeetingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMeetingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMeetingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
