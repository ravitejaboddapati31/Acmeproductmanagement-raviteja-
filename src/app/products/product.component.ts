import { Component} from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  pageTitle:string ="Acme Product Management";
  pageratingTitle:string="Ratings";
  imageWidth:number=80;
  imageMargin:number=5;
  
  
  showImage:boolean=true;
   products: Iproduct[]=[];
  filteredProducts:Iproduct[]=this.products;

  constructor(private productService: ProductService) { 
    this.products=productService.getProducts();
    this.filteredProducts=this.products;
  }

  toggleImage(): void {
   this.showImage=!this.showImage;
    } 
    _listFilter:string="HELLO RB67399!";
    //getters and setters//
    //here get and set are keywords//
    get listFilter():string{
      return this._listFilter;
    }
    set listFilter(value:string){                 //here i'm expecting string//
      this._listFilter=value;
      this.filteredProducts =value ? this.performFilter(value): this.products;
    }
performFilter(filterBy:string):Iproduct[]{
  filterBy=filterBy.toLowerCase();                    //coverting into lowercase//
  return this.products.filter(( product=>product.productName.toLowerCase().indexOf(filterBy)!==-1));
}
gotClicked(message:string):void{
this.pageratingTitle= message;
}

  }


