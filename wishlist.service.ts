import { FirebaseService } from './firebase.service';

export class WishlistService {
  wishlistIitems =[];
  matchId:boolean = false;
  
  
  constructor(private firebase: FirebaseService){

  }

  wished=(product)=>{
      if(product.wishlist===false)
      this.onItemAdded(product);
      else
      this.onItemDeleted(product);
  }

  onItemAdded = (product) => {
      console.log(product.id+"----"+product.quantity);
      if(this.wishlistIitems.length===0){
        product.wishlist=true;
          this.wishlistIitems.push(product);
         

        }
      else{
          for(let item of this.wishlistIitems) {
              if(item.id===product.id)
              {
                  item.quantity=item.quantity+product.quantity;
                  this.matchId=true;
              }
          }
          if(!this.matchId){
              this.wishlistIitems.push(product);
              product.wishlist=true;
          }
      }   
      console.log(this.wishlistIitems);
  }

  onItemDeleted = (product) => {
      this.wishlistIitems.forEach((item) => {
          if(item.id === product.id)
            this.wishlistIitems.splice(this.wishlistIitems.indexOf(item), 1);
        });
        console.log(this.wishlistIitems);
  }
}