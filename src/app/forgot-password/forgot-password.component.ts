import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ForgotPasswordService } from '../core/services/forgot-password/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  // MVP2 - Start of 2.4 Forgot Password
  token: String = '';
  newPass: String = '';
  confirmPass: String = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private forgotPasswordService: ForgotPasswordService,
  ) { }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.params['id'];
    //console.log(this.token);
  }
  /**
   * Forgot Password Function
  */
  forgotPass(confpass) {
    let payload = {
      password: confpass,
      token: this.token
    }
    this.forgotPasswordService.forgotPass(payload).then(res => {
      if (res.status == 'C') {
        alert('Password Successfully changed');
        console.log('Change password successfull');
        this.router.navigate(['authentication/login']);
      }
      else {
        alert(res.message);
        console.log('Change password is falied');
        // this.router.navigate(['authentication/login']);
      }
    });
  }
  // MVP2 - Start of 2.4 Forgot Password
}
