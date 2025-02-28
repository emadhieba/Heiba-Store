import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { SharedModuleModule } from '../../shared/shared-module/shared-module.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
 imports:[
  SharedModuleModule,
FormsModule
 ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  selectedProduct: boolean = false;
  DataDetails: any = null;
  products: any[] = []
  catogres: any[] = []
  diffrenetproducts: any[] = []

    loder:boolean=false ;

constructor(private service: ProductsService)  {
}

ngOnInit(): void {
  this.getProduct();
  this.getCategoriey();
//  this.getDProduct();
}
getProduct() {
  this.loder=false;
  this.service.getAllProducts().subscribe((res: any) => {
    if (res && Array.isArray(res)) {
      this.products = res; 
      this.loder=true;  
    } else {
      console.error("Invalid API response: ", res);
      alert(Error)
      this.loder=true;
    }
  });

}
getCategoriey() {
  this.loder=false;
  this.service.getAllCategories().subscribe((res: any) => {
    if (res && Array.isArray(res)) {
      this.catogres = res; 
      this.loder=true;
    } else {
      console.error("Invalid API response: ", res);
      this.loder=true;
    }
  });
}


filterCatogres(event:any){
  let value = event.target.value;
  this.getProductByCatogey(value)

}
getProductByCatogey(keyWord:any){
  this.loder=false;
  this.service.getProductsCategory(keyWord).subscribe((res: any) => {
    if (res && Array.isArray(res)) {
      this.products = res; 
      this.loder=true;
    } else {
      console.error("Invalid API response: ", res);
      this.loder=true;
    }
  });
}


getDProduct() {

  this.service.getAllDiffrenetProducts().subscribe((res: any) => {
    if (res && Array.isArray(res.products)) {
      this.diffrenetproducts = res; 
      console.log(this.diffrenetproducts)
      
    } else {
      console.error("Invalid API response: ", res);
      alert(Error)
      this.loder=true;
    }
  });
}

detailsProduct(event:any){
  let value1 = event.target.value;
  this.DataDetails = value1;
  this.selectedProduct = true;
  this.service.getOneProduct(value1).subscribe((res: any) => {
    this.DataDetails = [res];  
  }); 
  
  
}

closeProductDetails() {
  this.selectedProduct = false;
    this.DataDetails = null;
}
// addToCart(event:any){
// if('cart' in localStorage){
//   this.Cart=JSON.parse(localStorage.getItem('cart')!)
//   let exeist= this.Cart.find(item => item.id ==event.id)
//   if(exeist){
//             alert("product is already in your cart"  + event.id )
//   }else{
//     this.Cart.push(event)
//     localStorage.setItem("cart" , JSON.stringify(this.Cart))
//   }
// }else{
//   this.Cart.push(event)
//   localStorage.setItem("cart" , JSON.stringify(this.Cart))
// }


// }
addToCart(item: any) {
  item.quantity = item.quantity || 1; // تعيين الكمية الافتراضية إذا لم تكن موجودة
  let cart: any[] = [];
  if ('cart' in localStorage) {
    cart = JSON.parse(localStorage.getItem('cart')!);
    const exist = cart.find(product => product.id === item.id);
    if (exist) {
      exist.quantity += 1; // إذا كان المنتج موجودًا، زيادة الكمية
    } else {
      cart.push(item);
    }
  } else {
    cart.push(item);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  // alert(`تمت إضافة المنتج بكمية: ${item.quantity}`);
}



}
