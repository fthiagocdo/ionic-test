import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CountryHolidaysPageRoutingModule } from './country-holidays-routing.module';
import { CountryHolidaysPage } from './country-holidays.page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HolidaysService } from '../services/holidays.service';
import { Interceptor } from '../interceptors/interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryHolidaysPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [CountryHolidaysPage],
  providers: [
    HolidaysService,
    Interceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
})
export class CountryHolidaysPageModule {}
