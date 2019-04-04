import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  register: boolean =true;
  
  constructor(
    private route: ActivatedRoute,
    public router: Router) { 
    
  }

  ngOnInit() {
    this.register=true;
    // console.log("router url:",this.router.url)
  }

  getURL(){
    // console.log(this.router.url)
  }
}
