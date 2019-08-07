import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistItems=[];

  constructor(private wishlist:WishlistService) { }

  ngOnInit() {
    this.wishlistItems = this.wishlist.wishlistIitems;
  }

  deleteItem = (itemid:number) => {
    this.wishlist.onItemDeleted(itemid);
  }

}
