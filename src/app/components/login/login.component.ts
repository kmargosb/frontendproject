import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logIn() {
    this.authService.logIn(this.user)
      .subscribe({
        next: res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private-homepage'])
        },
        error: err => console.log(err)
      })
  }

}
