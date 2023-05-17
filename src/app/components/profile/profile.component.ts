import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profile: any = [];

  userId: any = this.profile._id;

  data: any = {
    username: this.profile.username,
    firstname: this.profile.firstname,
    lastname: this.profile.lastname,
    email: this.profile.email,
    password: this.profile.password,
    picture: this.profile.picture

  }

  constructor(
    private profileService: ProfileService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.profileService.profileId()
      .subscribe({
        next: res => {
          this.profile = res;
          console.log(res)
        },
        error: err => console.log(err)
      })
  }

  putData() {
    this.profileService.updateProfile(this.data)
      .subscribe({
        next: res => {
          console.log(res)
        },
        error: err => console.log(err)
      })
  }

  confirmDelete() {
    const result = confirm("¿Estas seguro de querer eliminar tu cuenta permanentemente?");

    if (result) {
      this.delete()
      this.authService.logOut()
    }
  }

  delete() {
    this.profileService.deleteProfile()
      .subscribe({
        next: res => {
          console.log(res)
        },
        error: err => console.log(err)
      })
  }
}
