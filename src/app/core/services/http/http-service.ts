import {HttpClient, HttpHeaders }from '@angular/common/http'; 
import {Injectable }from '@angular/core'; 

@Injectable()
export class HttpService {

    private baseUrl = 'https://automom-dev.herokuapp.com/'
headers:HttpHeaders = new HttpHeaders(); 

    constructor(private http:HttpClient) {
        this.headers.append('Access-Control-Allow-Origin', '*'); 
        this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
        this.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token'); 
        // this.headers.append('Authorization', 'Bearer' + ' ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzdlNDE0NTVlZWZkMzFlYzg0MzMwNTkiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiZXhwIjoxNTUyNDA0NzEyLCJpYXQiOjE1NTE3OTk5MTJ9.y2wB1Rk1VFVURAijQVhgEUO9Pb0shZMu7GKTf2QCNMU'); 
    }

    /**
     * 
     * @param subUrl {string} - api subUrl
     * @description This method will call HttpClient's Get method to fetch data from API
     * @returns Promise
     */
    httpGet(subUrl) {
        console.log('httpGet called');
        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl + subUrl).subscribe((res: any) => {
                console.log(res)
                resolve(res);
            }, err => {
                reject(err);
            });
        })
    }
    
    
    /**
     * 
     * @param subUrl {string}
     * @param body {any}
     * @description This method will call HttpClient's Post method to post data to backend
     * @returns Promise
     */
    httpPost(subUrl:string, body:any):Promise < any >  {
        const token = sessionStorage.getItem('token');
        return new Promise((resolve, reject) =>  {
            this.http.post(
                this.baseUrl + subUrl, body, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .subscribe((res) =>  {
                resolve(res); 
            }, err =>  {
                reject(err.error); 
            }); 
        })
    }

    /**
     * 
     * @param subUrl {string}
     * @param body {any}
     * @description This method will call HttpClient's Put method to update data to backend
     * @returns Promise
     */
    httpPut(subUrl: string, body: any) {
        //console.log('httpPut called');
        const token = sessionStorage.getItem('token');
        return new Promise((resolve, reject) => {
            this.http.put(this.baseUrl + subUrl, body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).subscribe((res: any) => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }

}
