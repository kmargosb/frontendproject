import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-private-homepage',
  templateUrl: './private-homepage.component.html',
  styleUrls: ['./private-homepage.component.css']
})
export class PrivateHomepageComponent {

  profile: any = [];
  userId: any = this.profile._id;

  product: any = []
  

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

  getProducts() {
    this.authService.getProduct()
      .subscribe({
        next: res => {
          this.product = res;              
          console.log(res)
        },
        error: err => console.log(err)
      })
  }

}
