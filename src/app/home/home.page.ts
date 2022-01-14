import { HolidaysService } from './../services/holidays.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  countries: any;
  
  constructor(
    private router: Router,
    private holidaysService: HolidaysService) {}

  ngOnInit() {
    this.holidaysService.findCountries().subscribe(
      data => { 
        this.countries = data;
      }
    );
  }

  showHolidays(code: string) {
    this.router.navigate([`countries/${code}/holidays`]);
  }

}