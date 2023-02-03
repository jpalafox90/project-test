import { Injectable } from '@angular/core';
/* import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'; */
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  apiUrl: string = 'http://localhost:8090/api/categoria';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) {
  }

  getCategorias(): Observable<any> {
    return this.http.get(this.apiUrl)
  }


/*   error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  } */

}
