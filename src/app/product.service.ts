import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productArray:any =[];

  constructor() { 
    this.productArray =[
        {
          prodID:1,
          img:"../../assets/product-1.jpg",
          amt:400,
          qnt:1
        },
        {
          prodID:1,
          img:"../../assets/product-1.jpg",
          amt:400,
          qnt:1
        }
      ];
    }

  public getAllproducts():any{
    return this.getAllproducts;
  }
}
