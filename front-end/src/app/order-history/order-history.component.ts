import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
result;
  constructor(private service:HttpService,private router:Router) { }

  ngOnInit() {
    this.service.getHistoryOrder().subscribe(res=>{
      this.result=res;
      console.log(this.result);
    })
  }
  details(id){
    console.log(id);
    this.router.navigate(['/details', id]);
  }
}
