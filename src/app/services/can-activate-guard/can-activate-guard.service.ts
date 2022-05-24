import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuardService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (typeof Storage !== 'undefined') {
      const hasPermission: boolean = !!localStorage.getItem('accessToken');
      if (hasPermission && localStorage.getItem('accessToken') != 'undefined' && localStorage.getItem('accessToken') != '') {
        return true;
      } else {
        this.router.navigate(['signin']); 
        return false;
      }
    } else {
      alert(
        'Your device does not have the basic requirements to run the application. Please try another device.',
      );
      return false;
    }
  }
}