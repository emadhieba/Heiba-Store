import { Component, OnInit } from '@angular/core';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';

@Component({
  selector: 'app-carts',
  imports: [SharedModuleModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit{

 Total:number=0
  ProductsCart:any[]=[]


  ngOnInit() {

    this.getCartProducts()

  }
getCartProducts(){
  if('cart' in localStorage){
    this.ProductsCart=JSON.parse(localStorage.getItem('cart')!)
    this.getTotal();
  }
  
}
incrementQuantity(item: any) {
  item.quantity = (item.quantity || 0) + 1;
  this.updateLocalStorage();
 
}

decrementQuantity(item: any) {
  if (item.quantity > 1) {
    item.quantity--;
    this.updateLocalStorage();
  }
}

updateLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(this.ProductsCart));
  this.getTotal();

}
 
deletCartProduct(index:any){
this.ProductsCart.splice(index,1)
this.updateLocalStorage();
}

getTotal(){
  this.Total=0
  for( let x in this.ProductsCart){
this.Total += this.ProductsCart[x].price * this.ProductsCart[x].quantity;

  }

}
}

