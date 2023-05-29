// import { Component, OnInit } from '@angular/core';
// import { ProfileService } from "../../services/profile.service";
// import { AuthService } from "../../services/auth.service";


// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent {

//   file!: File;
//   photoUser!: String | ArrayBuffer | null;

//   profile: any = [];
//   userId: any = this.profile._id;
  
//   data: any = {
//     firstname: this.profile.firstname,
//     lastname: this.profile.lastname,
//     username: this.profile.username,
//     email: this.profile.email,
//     password: this.profile.password,
//     image: this.file
//   }

//   constructor(
//     private profileService: ProfileService,
//     private authService: AuthService
//   ) { }

//   ngOnInit() {
//     this.profileService.profileId()
//       .subscribe({
//         next: res => {
//           this.profile = res;
//           console.log(res)
//         },
//         error: err => console.log(err)
//       })
//   }

//   onPhoto(event: any): void {
//     if(event.target.files && event.target.files[0]) {
//       this.file = <File>event.target.files[0];
//       // image preview
//       const reader = new FileReader();
//       reader.onload = e => this.photoUser = reader.result;
//       reader.readAsDataURL(this.file)
//     }
//   }

//   putData() {
//     this.profileService.updateProfile(this.data.firstname, this.data.lastname, this.data.username, this.data.email, this.data.password, this.file)
//       .subscribe({
//         next: res => {
//           console.log(res)
//         },
//         error: err => console.log(err)
//       })
//   }

//   confirmDelete() {
//     const result = confirm("¿Estas seguro de querer eliminar tu cuenta permanentemente?");

//     if (result) {
//       this.delete()
//       this.authService.logOut()
//     }
//   }

//   delete() {
//     this.profileService.deleteProfile()
//       .subscribe({
//         next: res => {
//           console.log(res)
//         },
//         error: err => console.log(err)
//       })
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  file!: File;
  photoUser!: String | ArrayBuffer | null;
  profile: any = [];
  userId: any;
  data: any = {};

  showStoredImage: boolean = true;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.profileService.profileId()
      .subscribe({
        next: res => {
          this.profile = res;
          this.userId = this.profile._id;
          this.data = {
            firstname: this.profile.firstname,
            lastname: this.profile.lastname,
            username: this.profile.username,
            email: this.profile.email,
            password: this.profile.password,
            image: this.file
          };
          console.log(res);
        },
        error: err => console.log(err)
      });
  }

  onPhoto(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.showStoredImage = false;
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => (this.photoUser = reader.result);
      reader.readAsDataURL(this.file);
    }
  }

  putData() {
    this.profileService
      .updateProfile(
        this.data.firstname,
        this.data.lastname,
        this.data.username,
        this.data.email,
        this.data.password,
        this.file
      )
      .subscribe({
        next: res => {
          console.log(res);
        },
        error: err => console.log(err)
      });
  }

  confirmDelete() {
    const result = confirm(
      '¿Estás seguro de querer eliminar tu cuenta permanentemente?'
    );

    if (result) {
      this.delete();
      this.authService.logOut();
    }
  }

  delete() {
    this.profileService.deleteProfile().subscribe({
      next: res => {
        console.log(res);
      },
      error: err => console.log(err)
    });
  }
}

