import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
   
      inputAddress: new FormControl('', [Validators.required, Validators.minLength(10)]),
      inputAddress2: new FormControl('', [Validators.required, Validators.minLength(3)]),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
 
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  get f(){
    return this.profileForm.controls;
  }
  getCountry(event:any){
    console.log(event)
  }
  

}
