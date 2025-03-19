import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(){

return this.http.get('https://api.escuelajs.co/api/v1/products')
  }
  getAllCategories(){

    return this.http.get('https://api.escuelajs.co/api/v1/categories')
  }

  getProductsCategory(keyWord:any){
    return this.http.get(' https://api.escuelajs.co/api/v1/categories/'+keyWord +'/products')
  }
  getOneProduct(id:any){
    return this.http.get('https://api.escuelajs.co/api/v1/products/'+id)
  }
  getAllDiffrenetProducts(){
    return this.http.get(' https://api.escuelajs.co/api/v1/products/1')
  }
}

