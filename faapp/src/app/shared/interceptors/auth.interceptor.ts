// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export class AuthInterceptor implements HttpInterceptor{
//   intercept(req:  HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const copyReq = req.clone({setHeaders:{kakak: '12345'}})
//     return next.handle(copyReq);
//   }

// }