import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  products()
  {
    
    return this.http.get("http://localhost:8090/api/notes");
  }
  getProductByCategory(category : String)
  {
    
    return this.http.get("http://localhost:8090/api/products/category/"+category);
  }
  getProductById(id : Number)
  {
    
    return this.http.get("http://localhost:8090/api/notes/"+id);
  }
  getPriceBetweenAndCat(p1:Number,p2:Number,cat:String)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8090/api/getByPriceandcat/"+p1+"/"+p2+"/"+cat,{headers});
 }


}
