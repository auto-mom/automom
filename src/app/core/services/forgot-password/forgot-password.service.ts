import { Injectable } from '@angular/core';
import { HttpService } from "../http/http-service";

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpService) { }

  forgotPassword(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.httpPost("password/forgot", data).then(
        res => {
          resolve(res);
        },
        err => {
          reject(err.error);
        }
      );
    });
  }
}
