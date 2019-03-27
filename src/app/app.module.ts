import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './core/services/http/http-service';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CreateMeetingRequestComponent } from './create-meeting-request/create-meeting-request.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebSpeechModule } from './speech-recognition/speech-recognition.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const appRoutes: Routes = [
  // {path: 'home', component: AppComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AuthenticationComponent,
    CreateMeetingRequestComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule ,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    WebSpeechModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
