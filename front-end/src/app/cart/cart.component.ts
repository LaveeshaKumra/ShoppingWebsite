import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
result;r1;total=0;i;length;t;
  constructor(private router:Router,private httpservice:HttpService) { 
    
  }

  ngOnInit() {
    this.httpservice.showcart().subscribe(res => {
      this.result = res;
      this.length=this.result.length;
      console.log(this.length);
      if(this.length==0){
        this.router.navigate(['empty']);
      }
      console.log(this.result);
      this.findtotal();
      });

      
  }


  findtotal(){
    this.total=0;
    for(this.i=0;this.i<this.result.length;this.i++){
      this.total+=this.result[this.i].items.productPrice * this.result[this.i].quantity;
    }
    console.log(this.total);

  }

  Continue(){
    this.router.navigate(['/']);
  }

  details(id){
    console.log(id);
    this.router.navigate(['/details', id]);
  }
deleteproduct(id){
  console.log(id);
  this.httpservice.deleteproduct(id).subscribe(res => {
    this.r1 = res;
    console.log(this.r1);
    this.ngOnInit();
    });
}

increase(id){
  this.httpservice.addProductToCart(id).subscribe(res=>{
    this.ngOnInit();
  })
}

descrease(id){

  this.httpservice.removeproductfromcart(id).subscribe(res=>{
    this.ngOnInit();
  })
}

checkOut() {
  this.httpservice.checkout().subscribe((data4) => {
    this.router.navigate(['orderHistory']);
  });
}


}
