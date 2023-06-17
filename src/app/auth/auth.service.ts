import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  token = localStorage.getItem('token');

  setLogin(loginData: any): Observable<any> {
    return this.http.post('/user/login', loginData);
  }

  isLoggedIn() {
    return this.token !== undefined;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
