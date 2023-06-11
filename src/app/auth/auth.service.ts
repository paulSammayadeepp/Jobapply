import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  setLogin(loginData: any): Observable<any> {
    return this.http.post(
      '/user/login',
      loginData,
    );
  }
}
