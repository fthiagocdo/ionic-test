import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../model/country';
import { CountryHoliday } from '../model/country-holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  /**
   * Do not change the signature of this function
   */
  findCountries() : Observable<Country[]> {
    return of([])
  }

  /**
   * Do not change the signature of this function
   */
  findCountryHolidays(country: string) : Observable<CountryHoliday[]> {
    return of([]);
  }

}