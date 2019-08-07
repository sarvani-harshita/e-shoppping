import { Subject } from 'rxjs';

export class CartService {
    cartItems =[];
    matchId:boolean = false;
    len : number =0;
    count = new Subject();

    getCartItems() {
        return this.cartItems;
    }

    onItemAdded = (product) => {
        console.log(product.id+"----"+product.quantity);
        if(this.cartItems.length===0)
            this.cartItems.push(product);
        else{
            for(let item of this.cartItems) {
                if(item.id===product.id)
                {
                    item.quantity=item.quantity+product.quantity;
                    this.matchId=true;
                }
            }
            if(!this.matchId)
                this.cartItems.push(product);
                this.len++;
        }   
        console.log(this.cartItems);
        this.len=this.cartItems.length;
        this.count.next(this.len);

    }

    onItemDeleted = (itemId) => {
        this.cartItems.forEach((item) => {
            if(item.id === itemId)
              this.cartItems.splice(this.cartItems.indexOf(item), 1);
          });
          console.log(this.cartItems);
    }
}