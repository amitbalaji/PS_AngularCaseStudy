import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserRegistrationService } from './user-registration.service';
import { UserRegistrationComponent } from './user-registration.component';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserRegistrationComponent,
    CountryDropdownComponent
  ],
  imports: [RouterModule.forChild([{ path: '', component: UserRegistrationComponent }]),  SharedModule, CommonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,],
  exports: [RouterModule],
  providers:[UserRegistrationService]
})
export class UserRegistartionModule {}