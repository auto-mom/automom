import { Injectable } from '@angular/core';
import { HttpService } from '../http/http-service';

@Injectable()
export class AuthService {
    isUserAuthenticated: boolean =false;

  constructor(private http: HttpService) {
    
  }

  registerUser(data:any): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.httpPost('api/register', data).then((res) => {
            if(res.error){
                reject(res.error);
            }
            else{
                resolve(res);
            }
        }, err => {
            reject(err.error);
        });
    })

}

  loginUser(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.httpPost('api/login', data).then((res) => {    
            if(res.error){
                reject(res.error);
            }
            else{
                this.isUserAuthenticated = true
                resolve(res);
            }
        }, err => {
            reject(err.error);
        });
    })
  }
}
