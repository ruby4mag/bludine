import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private token: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.token.getToken();
        console.log("Token is " + token)
        if (token != null) {
            console.log("Token inside is " + token)

            authReq = req.clone({ headers: req.headers.append(TOKEN_HEADER_KEY, token) });
        }
        authReq = authReq.clone({ headers: authReq.headers.append("Access-Control-Allow-Origin", "*") });
        return next.handle(authReq);
    }
}
/*
export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
*/
