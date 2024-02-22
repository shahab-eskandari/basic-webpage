import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  authenticationService = inject(AuthenticationService);

  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitApplication() {
    this.authenticationService.submitApplication(
      this.signUpForm.value.firstName ?? '',
      this.signUpForm.value.lastName ?? '',
      this.signUpForm.value.email ?? '',
      this.signUpForm.value.password ?? '',
    );
  }

}
