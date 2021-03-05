import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//const AUTH_API = 'http://192.168.1.7:8080/api/auth/';
const AUTH_API = 'http://103.154.233.182:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantUserAuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'restaurantsignin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, restaurant: string): Observable<any> {
    return this.http.post(AUTH_API + 'restaurantsignup', {
      username,
      email,
      password,
      restaurant
    }, httpOptions);
  }
}
