import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ProfileService } from "../../services/profile.service";
import { PrivateService } from "../../services/private.service";



interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {

  file!: File;
  photoSelected!: String | ArrayBuffer | null;

  profile: any = [];
  userId: any = this.profile._id;

  // data: any = []

  products: any = {
    name: '',
    description: '',
    price: '',
    image: '',
    user: this.userId    
  }
 
  constructor(
    private router: Router,
    private profileService: ProfileService,
    private privateService: PrivateService
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

  onPhotoSelected(event: any): void {
    if(event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file)
    }
  }

  addProducts() {
    this.privateService.addProduct(this.products.name, this.products.description, this.products.price, this.file, this.userId)
      .subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['/private-homepage']);       
        },
        error: err => console.log(err)
      })
  }

}

