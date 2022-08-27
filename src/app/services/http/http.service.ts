import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '../../interfaces/http-response';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // Define API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  httpRequest(requestType: String, url: String, payload?: {}): Observable<HttpResponse> {
    if(requestType === 'GET' && url) {
      return this.http.get<HttpResponse>("" + url, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
    } else if(requestType === 'POST' && url && payload ) {
      return this.http.post<HttpResponse>("" + url, payload, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
    } else if(requestType === 'PUT' && url && payload) {
      return this.http.put<HttpResponse>("" + url, payload, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
    } else if(requestType === 'DELETE' && url) {
      return this.http.delete<HttpResponse>("" + url, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
    } else {
      alert("HTTP parameter missing.");
      return new Observable<HttpResponse>()
    }
  }

  // getEmployees(): Observable<HttpResponse> {
  //   return this.http
  //     .get<HttpResponse>(this.apiURL + '/employees')
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // // HttpClient API get() method => Fetch employee
  // getEmployee(id: any): Observable<HttpResponse> {
  //   return this.http
  //     .get<HttpResponse>(this.apiURL + '/employees/' + id)
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // // HttpClient API post() method => Create employee
  // createEmployee(employee: any): Observable<HttpResponse> {
  //   return this.http
  //     .post<HttpResponse>(
  //       this.apiURL + '/employees',
  //       JSON.stringify(employee),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // HttpClient API put() method => Update employee
  // updateEmployee(id: any, employee: any): Observable<HttpResponse> {
  //   return this.http
  //     .put<HttpResponse>(
  //       this.apiURL + '/employees/' + id,
  //       JSON.stringify(employee),
  //       this.httpOptions
  //     )
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // // HttpClient API delete() method => Delete employee
  // deleteEmployee(id: any) {
  //   return this.http
  //     .delete<HttpResponse>(this.apiURL + '/employees/' + id, this.httpOptions)
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}