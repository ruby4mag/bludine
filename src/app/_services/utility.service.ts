
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const baseUrl = 'http://192.168.1.7:8080/utility';
const baseUrl = 'http://103.154.233.182:8080/utility';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  constructor(private http: HttpClient) { }

  getRestaurantCount(): Observable<any> {
    return this.http.get(`${baseUrl}/restaurantcount`);
  }
  getUserCount(): Observable<any> {
    return this.http.get(`${baseUrl}/usercount`);
  }
  findRestaurantUsers(): Observable<any>{
    return this.http.get(`${baseUrl}/restaurantusers-list`);
  }
}

