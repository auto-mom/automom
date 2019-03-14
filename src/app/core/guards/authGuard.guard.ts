import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authentication/auth';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.isUserAuthenticated) {
        return true;
    }
    else{
        // navigate to authentication page
        this._router.navigate(['/authentication']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }
  }

}