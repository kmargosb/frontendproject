import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private URL = 'https://backend123.fly.dev'
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

  addProduct(name: string, description: string, price: any, image: File, user: string){
    const fd = new FormData();
    fd.append('name', name);
    fd.append('description', description);
    fd.append('price', price);
    fd.append('image', image);
    fd.append('user', user)
    return this.http.post<any>(this.URL + '/add-product', fd)
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/homepage'])
  }

}
