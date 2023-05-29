import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  // private URL = 'https://backend123.fly.dev'
  private URL = 'http://localhost:3000'

  

  constructor(
    private http: HttpClient,
  ) { }


  profileId() {
    return this.http.get<any>(this.URL + '/user')
  }
  updateProfile(firstname: string, lastname: string, username: string, email: string, password: string, picture: File) {
    const url = `${this.URL}/user`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const fd = new FormData();
    fd.append('firstname', firstname);
    fd.append('lastname', lastname);
    fd.append('username', username);
    fd.append('email', email);
    fd.append('password', password);
    fd.append('image', picture);
    return this.http.put<any>(url, fd, {headers});
  }
  deleteProfile() {
    const url = `${this.URL}/user`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(url, { headers })
  }

  
}