import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems =[];

  constructor(private cartservice:CartService) { }

  ngOnInit() {
    this.cartitems = this.cartservice.getCartItems();
  }

  deleteItem = (itemid:number) => {
    this.cartservice.onItemDeleted(itemid);
  }

}
