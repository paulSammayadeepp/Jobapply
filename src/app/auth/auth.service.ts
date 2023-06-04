import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  setLogin(loginData: any): Observable<any> {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': `f4279730-f3f0-463b-bc4a-c1ad8bf10e5d`,
      'Accept-Language': 'en',
    });
    return this.http.post(
      'https://insjb-api.dvconsulting.org/api/v1/user/login',
      loginData,
      { headers: header }
    );
  }
}
