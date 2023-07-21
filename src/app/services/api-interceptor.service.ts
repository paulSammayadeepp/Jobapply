import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Injectable, Injector } from '@angular/core';
import { SignupService } from './signup.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let _authService = this.injector.get(AuthService);
    let _signupService=this.injector.get(SignupService)
    // console.log('sending Request interceptor');
    let modifiedReq = req.clone({
      url: `https://insjb-api.dvconsulting.org/api/v1${req.url}`,
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept-Language': 'ko',
        'x-api-key': `f4279730-f3f0-463b-bc4a-c1ad8bf10e5d`,
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      //   'Accept-Language': 'en',
      //   'x-api-key': `f4279730-f3f0-463b-bc4a-c1ad8bf10e5d`,
      // }),
    });
    return next.handle(modifiedReq);
  }
}
