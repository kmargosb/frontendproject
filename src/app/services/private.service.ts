import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PrivateService {

  // private URL = 'https://backend123.fly.dev'
  private URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  addProduct(name: string, description: string, price: any, image: File, user: string){
    const fd = new FormData();
    fd.append('name', name);
    fd.append('description', description);
    fd.append('price', price);
    fd.append('image', image);
    fd.append('user', user)
    return this.http.post<any>(this.URL + '/add-product', fd)
  }
  
  getProductP(){
    return this.http.get<any>(this.URL + `/private-homepage`)
  }
}
