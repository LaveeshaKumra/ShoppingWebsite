import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authentication(username: any, password: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }
  authenticate(username,password)
  {
    const headers=new HttpHeaders({Authorization: 'Basic ' + btoa(username+':'+password)});
    return this.http.get ('http://localhost:8090/api/validateUser',{headers}).pipe(
      map(data => {
          sessionStorage.setItem('token',btoa(username+':' + password));
          return data;
        }

      ));
  }

}