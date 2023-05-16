import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  singUp(user: any){
    return this.http.post<any>(this.URL + '/singup', user)
  }

  logIn(user: any){
    return this.http.post<any>(this.URL + '/login', user)
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token')
  } 

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/homepage'])
  }

}
