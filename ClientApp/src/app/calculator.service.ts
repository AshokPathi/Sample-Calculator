// calculator.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private apiUrl = 'https://localhost:7079/api/calculator';

  constructor(private http: HttpClient) { }
 
  add(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/add?a=${a}&b=${b}`);
  }
  multiply(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/multiply?a=${a}&b=${b}`);
  }

  subtract(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/subtract?a=${a}&b=${b}`);
  }

  division(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/division?a=${a}&b=${b}`);
  }

  mod(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/mod?a=${a}&b=${b}`);
  }

  square(a: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/square?a=${a}`);
  }

  squareroot(a: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/squareroot?a=${a}`);
  }
}
