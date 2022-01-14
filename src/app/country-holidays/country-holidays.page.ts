import { HolidaysService } from './../services/holidays.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-holidays',
  templateUrl: './country-holidays.page.html',
  styleUrls: ['./country-holidays.page.scss'],
})
export class CountryHolidaysPage implements OnInit {

  country: string;
  holidays: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private holidaysService: HolidaysService
  ) { 
    this.country = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.holidaysService.findCountryHolidays(this.country).subscribe(
      data => { this.holidays = data; }
    );
  }

}
