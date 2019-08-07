import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter: number=0;
constructor(private cartservice:CartService){
}

ngOnInit(){
this.cartservice.count.subscribe(
  (len : number)=> this.counter=len
)
}


}
