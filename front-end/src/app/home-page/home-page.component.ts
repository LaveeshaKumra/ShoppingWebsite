import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {DataService} from '../data.service';
import { HttpService } from '../http.service';
import { AppService } from '../app.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
result:any;r1;user;
category1="All";
  constructor(private _activatedroute: ActivatedRoute,private httpservice:HttpService,private dataservice:DataService,private router:Router,private httpService:HttpService,private app:AppService) {
    this.dataservice.products().subscribe(res => {
      this.result = res;
      console.log(this.result);
      }); 

      this.httpservice.getinfo().subscribe(res=>{
        this.user=res;
        console.log(this.user);
        
      });
  }
  
result1;
l1;length=0;
data:any;searchItem;
  ngOnInit() {
    this.cart(); 
  }



  cart(){
    this.httpservice.showcart().subscribe(res => {
      this.r1 = res;
      console.log(this.r1);
      this.length=this.r1.length;
      console.log(this.length);        
      });
  }



  addtocart(id){
  this.httpService.addProductToCart(id).subscribe(response => {
    this.result1=response;
    console.log(this.result1);
    alert("item added to cart");
    this.cart();
    });
  
}

  details(id){
    console.log(id);
    this.router.navigate(['/details', id]);
  }

  
  filter(category){
    this.category1=category;
    if(category=='All')
  {
    this.dataservice.products().subscribe(response => {this.result=response;});
  }
  else
  {
    this.dataservice.getProductByCategory(category).subscribe(response => {this.result=response;console.log(this.result)})
  }
}

pricefilters($event,n1:number,n2:number)
{
this.dataservice.getPriceBetweenAndCat(n1,n2,this.category1).subscribe((data1)=>{this.result=data1;});

}

addProduct(){
  this.router.navigate(['admin']);
}

editProduct(){
  this.router.navigate(['admin']);
}


search(){
console.log(this.searchItem);
}
   

logout(){
  sessionStorage.removeItem('token');
  this.app.isLoggedIn(false);
  this.router.navigate(['login']);
}

isAdmin(){
  // if(this.user.role=='admin'){
  //   return true;
  // }
  // else{
  //   return false;
  // }
}
}