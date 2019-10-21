import { Component, OnInit } from '@angular/core';
import { ProductData } from '../product-data';
import { Product } from '../product';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // products:Product[]= new ProductData().getProductList()
  products:Product[];
  selectedProduct:Product;
  childData:string;
errorMessage:any;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(responseData=>this.products=responseData);
    this.productService.getProducts().subscribe(error=>this.errorMessage=error);
    window.alert("sorry!requested resource not found");
  }
  //event handler userdefined
  onSelect(product:Product){
    this.selectedProduct=product                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

  }
  share()
  {
    window.alert('this product has been shared')
  }
  notifyUser(event)
  {
    this.childData=event
    window.alert(event)
  }

}
