import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryHolidaysPage } from './country-holidays.page';

const routes: Routes = [
  {
    path: '',
    component: CountryHolidaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryHolidaysPageRoutingModule {}
