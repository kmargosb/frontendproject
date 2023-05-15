import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private URL = 'https://backend123.fly.dev'

  constructor(
    private http: HttpClient,
    ) { }

  profileId(){
    return this.http.get<any>(this.URL + '/user')
  }
}
