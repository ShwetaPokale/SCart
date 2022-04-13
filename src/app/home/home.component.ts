import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
 

  constructor(private auth: AuthService, private svc: ProductService, private http:HttpClient){}

  //public productArray:any[] | undefined;
  ngOnInit(): void {
    this.products = this.http.get("http://localhost:5000/products");
  }



// add or minus product
inc( obj:any){
  obj.productQuantity=obj.productQuantity + 1;
 }
 dec(obj:any){
  obj.productQuantity=obj.productQuantity - 1;
  }
}

