import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with Token if user is logged in and request is to the api url
    //const isApiUrl = request.url.startsWith(this.urls.eGateGatewayAPI);
    //const lang = localStorage.getItem('lang');
    const lang = 'en-US';
    
      const email = 'testemployee14';
      request = request.clone({
          setHeaders: {
              //Authorization: `Bearer ${token}`,
              Email: email,
              Lang: `${lang}`,
              IsAngularUI: 'true',
          }
      });
    return next.handle(request);
}
}
