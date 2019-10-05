import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  isLogedIn(email, pass) {
    if (email == 'abc@gmail.com' && pass == '12345q') {
      localStorage.setItem('token', 'authToken');
      return true;
    }
    else {
      return false;
    }
  }

  logOut(){
    localStorage.clear();
    return true;
  }
}
