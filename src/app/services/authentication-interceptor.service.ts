import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Basic dW1wb3JjZW50b2FwaWFjY2VzcyUlMzQ1OnZHNCpMYVlWUyFvQ1ZwYVVQY0RIdyZuTmY4Mlo1NDhRaVlIOXlpd24=`
      }
    });
    return next.handle(request);
  }
}
