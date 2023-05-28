import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PrivateService {

  // private URL = 'https://backend123.fly.dev'
  private URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getProductP(){
    return this.http.get<any>(this.URL + `/private-homepage`)
  }
}
