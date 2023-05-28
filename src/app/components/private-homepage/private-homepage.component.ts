import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import { PrivateService } from "../../services/private.service";

@Component({
  selector: 'app-private-homepage',
  templateUrl: './private-homepage.component.html',
  styleUrls: ['./private-homepage.component.css']
})
export class PrivateHomepageComponent {

  profile: any = [];
  userId: any = this.profile._id;

  product: any = [];
  datas: any = {
    name: this.product.name,
    description: this.product.description,
    price: this.product.price,
    user: this.userId
  }  

  constructor(
    private profileService: ProfileService,
    private privateService: PrivateService
    
  ) {
    this.datas=[
      {
        name: this.datas.name
      },
      {
        description: this.product
      }
    ]
   }


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

  getProduct() {
    this.privateService.getProductP()
    .subscribe({
      next: res => {
        this.product = res;
        console.log(res)
      },
      error: err => console.log(err)
    })
  }

}
