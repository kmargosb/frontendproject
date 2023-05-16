import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private URL = 'https://backend123.fly.dev'
  // private URL = 'http://localhost:3000'

  constructor(
    private http: HttpClient,
  ) { }
  

  profileId() {
    return this.http.get<any>(this.URL + '/user')
  }
  updateProfile(data: any) {
    const url = `${this.URL}/user`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(url, data, {headers});
  }
}