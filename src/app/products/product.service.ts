import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody:any){
    const baseURL = 'http://localhost:3000/products/'
    return this.httpClient.post(baseURL,productBody)
  }

  viewProduct(productId:any){
    const baseURL = 'http://localhost:3000/product/'+productId
    return this.httpClient.get(baseURL)
  }

  updateProduct(productId:any,productBody:any){
    const baseURL = 'http://localhost:3000/product/'+productId
    return this.httpClient.put(baseURL,productBody)
  }

  deleteProduct(productId:any){
    const baseURL = 'http://localhost:3000/product/'+productId
    return this.httpClient.delete(baseURL)
  }
  searchCategoryProduct(categoryId:any){
    const baseURL = 'http://localhost:3000/product/category='+categoryId
    return this.httpClient.get(baseURL)
  }

  searchDateProduct(dateParam:any){
    const baseURL = 'http://localhost:3000/product/date='+dateParam
    return this.httpClient.get(baseURL)
  }
}
