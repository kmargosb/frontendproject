import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";

@Component({
  selector: 'app-private-homepage',
  templateUrl: './private-homepage.component.html',
  styleUrls: ['./private-homepage.component.css']
})
export class PrivateHomepageComponent {

  userId: string = ''

  constructor(
    private profileService: ProfileService
  ){}



  ngOnInit(){
    this.profileService.profileId()
    .subscribe({
      next: res => {
        this.userId = res.userId
        console.log(this.userId)
      },
      error: err => console.log(err)
    })
  }

}
