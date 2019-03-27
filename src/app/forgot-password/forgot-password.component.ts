import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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
    private router: Router
  ) {
    // this.token = window.location.href.toString().slice(39);
    // console.log(this.token);
   }

  ngOnInit() {
  }
  /**
   * Forgot Password Function
  */
  // forgotPass() {
  //   this.payload = {
  //    password :this.newPass,
  //    token: this.token
  //   }
  //   Service.forgotPass(this.payload).subscribe(res => {
  //     if(res.status == 'C'){
      
  
  //     }
  //     else {
  //       alert('Something went wrong')
  //       console.log('forgot password service err');
  //     }
  //   },
  // err => {
  //   console.log(err);
  // })
    
  // }

}
