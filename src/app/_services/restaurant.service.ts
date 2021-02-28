
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const baseUrl = 'http://192.168.1.7:8080/restaurants';
const baseUrl = 'http://103.154.233.182:8080/restaurants';
@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: string, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateMenu(id: string, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}/menu`, data);
  }

  updateTable(id: string, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}/table`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: FunctionStringCallback): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}

