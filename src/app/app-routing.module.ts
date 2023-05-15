import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomepageComponent } from "./components/homepage/homepage.component";
import { PrivateHomepageComponent } from "./components/private-homepage/private-homepage.component";
import { LoginComponent } from "./components/login/login.component";
import { SingupComponent } from "./components/singup/singup.component";

import { AuthGuard } from "./auth.guard";
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'private-homepage',
    component: PrivateHomepageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'singup',
    component: SingupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
