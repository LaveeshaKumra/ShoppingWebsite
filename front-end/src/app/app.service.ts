import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient,private router:Router) { }
  isLoggedIn(bool:boolean)
  {
    sessionStorage.setItem('auth',String(bool));
    return bool;
  }
  checkLogin()
  {
    const auth=sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }

  adduser(user){
    return this.httpClient.post("http://localhost:8090/api/addUsers",user).subscribe(res=>
    this.router.navigate(['login']));
  }


  addProduct(product){
    return this.httpClient.post("http://localhost:8090/api/addproducts",product).subscribe(res=>{
      console.log(res);
  });
}
}
