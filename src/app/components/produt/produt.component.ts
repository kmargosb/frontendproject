import { Component } from '@angular/core';
import { PrivateService } from "../../services/private.service";

@Component({
  selector: 'app-produt',
  templateUrl: './produt.component.html',
  styleUrls: ['./produt.component.css']
})
export class ProdutComponent {
  
  product: any;

  constructor(private privateService: PrivateService){

    this.product = this.privateService.getSelectProduct()
    
  }  
  
}
