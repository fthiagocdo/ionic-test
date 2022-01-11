/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class Interceptor implements HttpInterceptor {
  m3oToken = 'YmQzOGYzMzctNThhNC00ZjIxLTkzODctY2FiNmEyNzg3ZWU2';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${this.m3oToken}`,
      },
    });

    return next.handle(req);
  }
}
