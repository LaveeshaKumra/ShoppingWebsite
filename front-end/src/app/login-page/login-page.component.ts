import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username;password;
  constructor(private authService:AuthenticationService,private service:AppService,private router:Router) { }

  ngOnInit() {
   
  }
  login()
 {
   if(this.username && this.password){
    
   this.authService.authenticate(this.username,this.password).subscribe(
     data=>
     {
       this.service.isLoggedIn(true);
       this.router.navigate(['/home']);
     }
   );
    }
    else{
      alert("fields can not be null"); 
    }
    
 }


 logout(){
   this.service.isLoggedIn(false);
   this.router.navigate(['/login']);
 }
}
