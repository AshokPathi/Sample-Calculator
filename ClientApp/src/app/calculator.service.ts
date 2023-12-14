// calculator.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private apiUrl = 'https://localhost:7079/swagger/index.html';

  constructor(private http: HttpClient) { }

  add(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/add?a=${a}&b=${b}`);
  }
}
