import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../model/country';
import { HolidaysService } from '../services/holidays.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countries: Country[] = [];

  constructor(
    private holidayService: HolidaysService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.fetchCountries();
  }

  navigateToHoliday(country) {
    this.router.navigateByUrl(`/countries/${country.code}/holidays`);
  }
  private fetchCountries() {
    this.holidayService.findCountries().subscribe(
      (res) => {
        this.countries = res;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
