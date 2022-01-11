import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from '../model/country';
import { CountryHoliday } from '../model/country-holiday';

@Injectable({
  providedIn: 'root',
})
export class HolidaysService {
  private baseUrl = 'https://api.m3o.com/v1/holidays';

  constructor(private httpClient: HttpClient) {}
  /**
   * Do not change the signature of this function
   */
  findCountries(): Observable<Country[]> {
    return this.httpClient
      .get<{ countries: Country[] }>(`${this.baseUrl}/Countries`)
      .pipe(
        map((data) => {
          const countries: Array<Country> = data.countries;
          return countries;
        })
      );
  }

  /**
   * Do not change the signature of this function
   */
  findCountryHolidays(country: string): Observable<CountryHoliday[]> {
    return this.httpClient
      .get<{ holidays: CountryHoliday[] }>(
        `${
          this.baseUrl
        }/List?country_code=${country}&year=${new Date().getFullYear()}`
      )
      .pipe(
        map((data) => {
          const holidays: Array<CountryHoliday> = data.holidays;
          return holidays;
        })
      );
  }
}
