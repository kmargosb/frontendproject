import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";

@Component({
  selector: 'app-private-homepage',
  templateUrl: './private-homepage.component.html',
  styleUrls: ['./private-homepage.component.css']
})
export class PrivateHomepageComponent {

  profile: any = [];
  userId: any = this.profile._id;

  constructor(
    private profileService: ProfileService,
  ) { }


  ngOnInit() {
    this.profileService.profileId()
      .subscribe({
        next: res => {
          this.profile = res;
          // console.log(res)
        },
        error: err => console.log(err)
      })
  }
}
