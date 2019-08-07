import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor(private http:HttpClient) { }

  // storeHomeData(data:any[]){
  //   return this.http.put("https://shopping-cart-89924.firebaseio.com/products/home.json",data);
  // }
  // storeMenData(data:any[]){
  //   return this.http.put("https://shopping-cart-89924.firebaseio.com/products/men.json",data);
  // }

 
  getMenData(){
    return this.http.get("https://storage-89aa8.firebaseio.com/products/men.json",{responseType:'json'})
    .pipe(
      map(
        data => {
          console.log(data);
          return data;
        }
      )
    )
  }
  getKidsData(){
    return this.http.get("https://storage-89aa8.firebaseio.com/products/kids.json",{responseType:'json'})
    .pipe(
      map(
        data => {
          console.log(data);
          return data;
        }
      )
    )
  }
  getWomenData(){
    return this.http.get("https://storage-89aa8.firebaseio.com/products/women.json",{responseType:'json'})
    .pipe(
      map(
        data => {
          console.log(data);
          return data;
        }
      )
    )
  }

  updateData(id:number,quantity:number,category:any){
    return this.http.put('https://storage-89aa8.firebaseio.com/products/'+category+'/'+id+'/quantity.json',quantity);
    }

    

}
