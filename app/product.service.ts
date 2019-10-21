import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<Product[]> 
  {
 return this.http.get<Product[]>('../assets/data/product1.json');
//return this.http.get<Product[]>('http://localhost:8080/products');
  }
  addProduct(product:Product):Observable<Product[]>{
    return this.http.post<Product[]>('http://localhost:8080/products',product);
  }
  errorHandler(error:HttpErrorResponse){
    return throwError((error.message) || 'Server error' )
  }
  }
