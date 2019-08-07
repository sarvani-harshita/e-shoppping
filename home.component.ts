import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { WishlistService } from '../wishlist.service';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // products:Array<any> = [];
  // cartItems=[];
  // category:any;


  // constructor(private cartservice:CartService,
  //             private productsService:ProductsService,
  //             private wishlistService : WishlistService,
  //             private db:FirebaseService,
  //             private route:Router,
  //             private toastr: ToastrService) { }

  // ngOnInit() {
  //   // this.products =  this.productsService.products.home;
  //  // console.log(this.products);
  //   // for(let item of this.products){
  //   //   if(item.quantity===0){
  //   //     for( let citem of this.cartItems){
  //   //       if(item.id===citem.id)
  //   //         item.quantity=citem.quantity;
  //   //     }
  //   //   }
  //   // }

  //   // this.db.storeHomeData(this.products).subscribe(
  //   //   (response) => console.log(response),
  //   //   (error) => console.log(error)
  //   // )

}
