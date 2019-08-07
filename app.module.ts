import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { CartService } from './cart.service'
import { FilterPipe } from './men/filter.pipe';
import { KidsComponent } from './kids/kids.component';
import { ProductsService } from './products.service';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistService } from './wishlist.service';
import { FirebaseService } from './firebase.service';
import { CarouselComponent } from './carousel/carousel.component';
import { TestComponent } from './test/test.component';

const appRoutes : Routes = [
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'test', component:TestComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    FilterPipe,
    WishlistComponent,
    CarouselComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    MatBadgeModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CartService,ProductsService,WishlistService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
