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

/**
 * The https://api.m3o.com/v1/holidays/Countries API call returns this type
 */
type CountryApiResponse = {
  countries: Country[];
}

/**
 * The https://api.m3o.com/v1/holidays/List API call returns this type
 */
type CountryHolidaysApiResponse = {
  holidays: CountryHoliday[];
}