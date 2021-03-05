
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const baseUrl = 'http://192.168.1.7:8080/restaurants';
const baseUrl = 'http://103.154.233.182:8080/guest';
@Injectable({
  providedIn: 'root'
})

export class GuestScanService {

  constructor(private http: HttpClient) { }

  scan(restaurantid: string , tableid: string): Observable<any> {
    return this.http.get(`${baseUrl}/${restaurantid}/${tableid}`);
  }
  submitPin(restaurantid: string , tableid: string, pin: string): Observable<any> {
    return this.http.get(`${baseUrl}/gpin/${restaurantid}/${tableid}/${pin}`);
  }


}

