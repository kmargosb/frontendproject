import { Component, OnInit } from '@angular/core';
import { PrivateService } from "../../services/private.service";

@Component({
  selector: 'app-cards-product',
  templateUrl: './cards-product.component.html',
  styleUrls: ['./cards-product.component.css']
})
export class CardsProductComponent implements OnInit {

  products: any = [];

  constructor(private privateService: PrivateService){}

  ngOnInit(): void {
    this.privateService.getProductP()
    .subscribe({
        next: res => {
          // console.table(res);
          this.products = res
        },
        error: err => console.log(err)
      })    
  }

}
