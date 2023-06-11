import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('sending Request interceptor');
    let modifiedReq = req.clone({
      url: `https://insjb-api.dvconsulting.org/api/v1${req.url}`,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept-Language': 'en',
        'x-api-key': `f4279730-f3f0-463b-bc4a-c1ad8bf10e5d`,
      }),
    });
    return next.handle(modifiedReq);
  }
}
