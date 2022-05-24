import { Injectable } from '@angular/core';
import { Router, CanLoad, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ClientGuardService implements CanLoad {
  constructor(private router: Router) {
  }
 
  canLoad(route: Route): boolean {
    if (typeof Storage !== 'undefined') {
      const hasPermission: boolean = !localStorage.getItem('accessToken');
      if (hasPermission) {
        return true;
      } else {
        this.router.navigate(['/']);
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