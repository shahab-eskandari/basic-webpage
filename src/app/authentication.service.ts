import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  submitApplication(firstName: string, lastName: string, email: string, password: string) {
    console.log(`Sign up application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}, password:${password}`);
  }
  constructor() { }
}
