import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryHoliday } from '../model/country-holiday';
import { HolidaysService } from '../services/holidays.service';

@Component({
  selector: 'app-country-holidays',
  templateUrl: './country-holidays.page.html',
  styleUrls: ['./country-holidays.page.scss'],
})
export class CountryHolidaysPage {
  countryId: string;
  holidayList: CountryHoliday[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private holidayService: HolidaysService
  ) {
    this.countryId = activatedRoute.snapshot.params.id;
  }

  ionViewWillEnter() {
    this.getHolidaysByCountryId(this.countryId);
  }

  private getHolidaysByCountryId(countryId: string) {
    this.holidayService.findCountryHolidays(countryId).subscribe(
      (res) => {
        this.holidayList = res;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
