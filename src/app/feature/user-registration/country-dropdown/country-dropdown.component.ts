import { Component, EventEmitter, OnInit, Output } from '@angular/core';import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserRegistrationService } from '../user-registration.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-country-dropdown',
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.css']
})
export class CountryDropdownComponent implements OnInit {
  @Output() countryChanged = new EventEmitter();
  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  countries: any;
  states: any;
  cities: any;
  country = new FormControl(null, [Validators.required]);
  state = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  city = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);

  constructor(private service: UserRegistrationService) {
    this.countries = this.service.getCountries();
    console.log(this.countries)
    this.form = new FormGroup({
      country: this.country,
      state: this.state,
      city: this.city,
    });
  }

  ngOnInit() {
    this.country.valueChanges.subscribe((country) => {
      this.state.reset();
      this.state.disable();
      if (country) {
        this.states = this.service.getStatesByCountry(country);
        this.state.enable();
      }
    });

    this.state.valueChanges.subscribe((state) => {
      this.city.reset();
      this.city.disable();
      if (state) {
        this.cities = this.service.getCitiesByState(this.country.value, state);
        this.city.enable();
      }
    });

    this.city.valueChanges.subscribe((city) => {
      if (city) {
        let obj ={
            country: this.country.value,
            state: this.state.value,
            city: this.city.value
        }
        this.countryChanged.emit(obj);
      }
    });
  }

  

}
