import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  singUp() {
    this.authService.singUp(this.user)
      .subscribe({
        next: res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private-homepage'])
        },
        error: err => console.log(err)
      });
  };

};
