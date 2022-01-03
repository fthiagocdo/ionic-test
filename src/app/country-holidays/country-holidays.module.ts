import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CountryHolidaysPageRoutingModule } from './country-holidays-routing.module';
import { CountryHolidaysPage } from './country-holidays.page';
import { HttpClientModule } from '@angular/common/http';
import { HolidaysService } from '../services/holidays.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryHolidaysPageRoutingModule,
    HttpClientModule
  ],
  declarations: [CountryHolidaysPage],
  providers: [
    HolidaysService
  ]
})
export class CountryHolidaysPageModule {}
