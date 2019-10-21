import {Product}from './product';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
export class ProductData {
     productList:Product[]=[{
      productId:1001,
        name:"Tv",
        brand:"sony",
        price:59000
     },{
      productId:1001,
        name:"computer",
        brand:"dell",
        price:49000
     },{
      productId:1003,
        name:"mobile",
        brand:"honor",
        price:45000
     },
     {
      productId:1004,
        name:"mobile",
        brand:"honor",
        price:45000
     }
    ];
    getProductList():Product[]
    {
        return this.productList;
    }
}
