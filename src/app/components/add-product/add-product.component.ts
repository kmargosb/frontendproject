import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ProfileService } from "../../services/profile.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  profile: any = [];
  userId: any = this.profile._id;

  product: any = {
    name: '',
    description: '',
    price: Number,
    photoUrl: {
      public_id: '',
      imageURL: ''
    },
    user: this.userId    
  }
 
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService
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

  addProducts() {
    this.authService.addProduct(this.product)
      .subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['/private-homepage']);       
        },
        error: err => console.log(err)
      })
  }

}
