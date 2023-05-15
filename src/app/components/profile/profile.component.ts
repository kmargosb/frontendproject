import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userId = String;

  profile: any = [];

  constructor(private profileService: ProfileService){}

  ngOnInit(){
    this.profileService.profileId()
    .subscribe({
      next: res => {
        this.profile = res;
        console.log(res)
      },
      error: err => console.log(err)
    })
  }
}
