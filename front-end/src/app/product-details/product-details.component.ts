import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import {DataService} from '../data.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id;
  result;
  result1;
  constructor(private dataservice: DataService, private route:ActivatedRoute, private httpService:HttpService) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id=params.get('id');
  });
  this.dataservice.getProductById(this.id).subscribe(response => {
    this.result=response;
    console.log(this.result);
    });
}

addtocart(id){
  this.httpService.addProductToCart(id).subscribe(response => {
    this.result1=response;
    console.log(this.result1);
    alert("item added to cart");
    });
  
}

}
