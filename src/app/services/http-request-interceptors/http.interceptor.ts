import { Component, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ToggleMenuService } from '../toggle-menu/toggle-menu.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  sideMenuOpen! : boolean;
  constructor(private router: Router, public dialog: MatDialog, private toggleMenuService : ToggleMenuService ) { 
    this.toggleMenuService.toggleMenuState$.subscribe(status => {
      if(status){
        this.sideMenuOpen = true;
      }
    });
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
        //navigate /delete cookies or whatever
        localStorage.removeItem('accessToken');
        this.logout();
        // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
        return of(err.message); // or EMPTY may be appropriate here
    }
    return throwError(() => new Error('Authentication Error.'));
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = '123456';
    // Clone the request to add the new header.
    const authReq = request.clone({ setHeaders: { API_KEY }});
    // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
    return next.handle(authReq).pipe(catchError(x=> this.handleAuthError(x))); //here use an arrow function, otherwise you may get "Cannot read property 'navigate' of undefined" on angular 4.4.2/net core 2/webpack 2.70
  }

  logout(): void {
    const dialogRef = this.dialog.open(DialogContentComponent);
    dialogRef.afterClosed().subscribe((response: boolean) => {
      if(response){
        if(this.sideMenuOpen){
          this.toggleMenuService.emitData();
        }
        this.router.navigate(['/signin']);
      }
    });
  }
}

@Component({
  selector: 'confirm-dialog',
  template: `
    <mat-dialog-content>
    Authentication Failed!
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-stroked-button color="link" mat-dialog-close="true">Ok</button>
    </mat-dialog-actions>
  `,
})
export class DialogContentComponent {}
