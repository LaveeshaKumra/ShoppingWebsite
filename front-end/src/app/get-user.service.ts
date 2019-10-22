import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {posts} from './posts';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http:HttpClient) { }
  post1_user(posts : posts)
  {
     return this.http.post<any>('http://localhost:8090/users/addUsers',posts,{headers : new HttpHeaders( {'Content-Type' : 'application/json'})});
  }

  
}