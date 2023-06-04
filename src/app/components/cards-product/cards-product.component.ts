import { Component, OnInit } from '@angular/core';
import { PrivateService } from "../../services/private.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards-product',
  templateUrl: './cards-product.component.html',
  styleUrls: ['./cards-product.component.css']
})
export class CardsProductComponent implements OnInit {

  products: any = [];
  product: any = {};

  constructor(
      private privateService: PrivateService,
      private router: Router
      ) { }

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

  getCardData(product: any): void {
    console.log(product)
    this.privateService.setSelectProduct(product);
    this.router.navigate(['/product']);
  }

}
