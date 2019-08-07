import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../products.service';
import { WishlistService } from '../wishlist.service';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  products:Array<any> = [];
  cartItems=[];
  filtered:string='';
  category:any;

  constructor(private cartservice:CartService,
              private productsService:ProductsService,
              private wishlistService:WishlistService,
              private db:FirebaseService,
              private route:Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    // this.products=this.productsService.products.men;
    console.log(this.products)
    // for(let item of this.products){
    //   if(item.quantity===0){
    //     for( let citem of this.cartItems){
    //       if(item.id===citem.id)
    //         item.quantity=citem.quantity;
    //     }
    //   }
    // }

    // this.db.storeMenData(this.products).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // )
    this.category=this.route.url.replace('/','');
    this.db.getWomenData().subscribe(
      (data:any[]) => this.products=data,
      (error) => console.log(error)
    )
    
    console.log("Products"+this.products);
      return this.products;
  }

  itemsDeleted = (id:number) => {
    this.products.forEach((product) => {
      if(product.id === id)
      {
        if(product.quantity>0)
          product.quantity = product.quantity-1;
        this.db.updateData(id,product.quantity,this.category).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
          );
        return product.quantity;
      }
    });
  }

  itemsAdded = (id:number) => {
    this.products.forEach((product) => {
      if(product.id === id)
      {
        if(product.quantity>=0 && product.quantity<10)
          product.quantity = product.quantity+1;
        this.db.updateData(id,product.quantity,this.category).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
          );
        return product.quantity;   
      }
    });
  }


  addItem = (id:number) => {
    console.log("added");
    this.products.forEach((product) => {
      if(product.id===id)
        this.cartservice.onItemAdded(product);
    });
    this.toastr.success('Item added to cart!');
  }

  addItemWishlist = (id:number) => {
    console.log("added to wishlist");
    this.products.forEach((product) => {
      if(product.id===id)
        this.wishlistService.onItemAdded(product);
    });
    this.toastr.success('Item added to wishlist!');
  }

}
