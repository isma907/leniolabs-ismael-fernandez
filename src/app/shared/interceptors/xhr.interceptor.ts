import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, of, throwError} from 'rxjs';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  constructor() {
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      return of(err.message);
    }
    return throwError(err);
  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: request.headers.set('X-API-Key', 'KFxchZGvU4ldps69WEcscHRu9dnb2ueH57pIM3Oa')
    });
    return next.handle(authReq).pipe(catchError(x => this.handleAuthError(x)))
  }
}
