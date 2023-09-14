import { Injectable } from '@angular/core';
import { Country, State, City }  from 'country-state-city';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  private countryData = Country;
  private stateData = State;
  private cityData = City

  constructor() { }


  getCountries() {
    return this.countryData.getAllCountries()
  }

  getStatesByCountry(countryCode: string) {
    return this.stateData.getStatesOfCountry(countryCode);
  }

  getCitiesByState(countryCode: string, stateCode: string) {
    return this.cityData.getCitiesOfState(countryCode, stateCode);
  }
}
