import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'riseAndShine';
  loginStatus = true;
  logoutStatus = false;
  constructor(private service: AuthService, private route: Router, location: Location) {
    route.events.subscribe(
      data => {
        if (data) {
          if (data) {
            if (location.path() == '/admin') {
              this.loginStatus = false;
              this.logoutStatus = true;
            } else {
              this.loginStatus = true;
              this.logoutStatus = false;
            }
          }
        }
      }
    )
  }

  logOut() {
    var log = this.service.logOut();
    if (log) {
      this.route.navigate(['/login']);
    }
  }
}
