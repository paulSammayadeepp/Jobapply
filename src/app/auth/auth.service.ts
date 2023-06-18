import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // token = localStorage.getItem('token');
  private tokenMsg = new BehaviorSubject<string>('');

  setLogin(loginData: any): Observable<any> {
    return this.http.post('/user/login', loginData);
  }

  setToken(message: string) {
    this.tokenMsg.next(message);
  }

  getToken(): Observable<string> {
    return this.tokenMsg.asObservable();
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
