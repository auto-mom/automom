import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ForgotPasswordService } from '../core/services/forgot-password/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  token: String = '';
  newPass: String = '';
  confirmPass: String = '';
  constructor(
    private router: Router,
    private forgotPasswordService: ForgotPasswordService,
  ) {
    this.token = window.location.href.toString().slice(38);
    console.log(this.token);
   }

  ngOnInit() {
  }
  /**
   * Forgot Password Function
  */
  forgotPass(confpass) {
    let payload = {
     password :confpass,
     token: this.token
    }
  this.forgotPasswordService.forgotPass(payload).then(res => {
    if(res.status == 'C') {
      console.log('Change password successfull');
      this.router.navigate['/authentication/login'];
    }
    else {
      alert(res.error[0].msg);
      console.log('Change password is falied');
      this.router.navigate['/authentication/login'];
    }
  }); 
  }
}
