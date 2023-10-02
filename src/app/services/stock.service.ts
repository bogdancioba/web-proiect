import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private apiUrl = 'http://localhost:3000/api/stocks';

  constructor(private http: HttpClient) {}

  getAllStocks(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
