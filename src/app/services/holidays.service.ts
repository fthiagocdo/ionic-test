import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Country } from '../model/country';
import { CountryHoliday } from '../model/country-holiday';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  constructor(private http: HttpClient) {}

  private readonly url: string = 'https://api.m3o.com/v1';
  private readonly token: string = 'ZmJkZGEyMWUtZDQ5Yi00ODlkLWIwOTgtN2NjM2Q2YjA2MDg3';

  createAuthHeader() : HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer '+this.token);
  }

  /**
   * Do not change the signature of this function
   */
  findCountries() : Observable<Country[]> {
    let headers = this.createAuthHeader();
    
    return this.http
      .get<Country[]>(`${this.url}/holidays/Countries`, {headers})
      .pipe(map(result => result['countries']));
  }

  /**
   * Do not change the signature of this function
   */
  findCountryHolidays(country: string) : Observable<CountryHoliday[]> {
    let headers = this.createAuthHeader();
    
    return this.http
      .post<CountryHoliday[]>(
        `${this.url}/holidays/list`, 
        {"country_code": country, "year": 2022}, 
        {headers}
      ).pipe(map(result => result['holidays']));
  }

}