import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { json } from 'express';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  list: any=[];

  constructor(private http:HttpClient) {}

  //calling function
  ngOnInit(): void {
    //this.CartDetails();
   // this.loadCart();
    this.list = this.http.get("http://localhost:5000/list");


  }

  //checking is their any data in localstorage
  getCartDetails:any=[];
  CartDetails(){
    if(localStorage.getItem('localCart')){
      this.list =JSON.parse( localStorage.getItem('localCart') || '{}');
      console.log(this.list);

    }
  }
  
//add n remove 
incQnt(prodID:any, qnt:any){
    for(let i=0; i<this.list.length; i++){
      if(this.list[i].prodID == prodID){   
        if(qnt != 500){
          this.list[i].qnt = parseInt(qnt) + 1;

        }    
      }

    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.loadCart();

  }

 decQnt(prodID:any, qnt:any){
  for(let i=0; i<this.list.length; i++){
    if(this.list[i].prodID == prodID){   
      if(qnt != 1){
        this.list[i].qnt = parseInt(qnt) - 1;

      }    
    }

  }
  localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
  this.loadCart();

}

// main total
total:number = 0;
 loadCart(){
  if(localStorage.getItem('localCart')){
    this.list = JSON.parse(localStorage.getItem('localCart') || '{}');
    this.total = this.list.reduce(function(acc:any, val:any){
      return acc + (val.productPrice * val.productQuantity);
    }, 0);
  }

}
//remove all
removeall(){
  localStorage.removeItem('localCart');
  this.list = [];
  this.loadCart();
  this.total = 0;
}
 //single product remove
 singleDelete(list:any){
   if(localStorage.getItem('localCart')){
      this.list = JSON.parse(localStorage.getItem('localCart') || '{}');
      for(let i=0; i<this.list.length; i++){
        if(this.list[i].prodID === list){
          this.list.splice(i,1);
          localStorage.setItem('localCart', JSON.stringify(this.list));
           this.loadCart();
        }
      }
   }
 }
}