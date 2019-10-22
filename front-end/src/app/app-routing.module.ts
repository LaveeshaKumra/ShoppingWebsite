import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminComponent } from './admin/admin.component';
import { EmptyComponent } from './empty/empty.component';


const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'details/:id',
    component:ProductDetailsComponent
  },
  {
    path:'profile',
    component:ProfilePageComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'orderHistory',
    component:OrderHistoryComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'empty',
    component:EmptyComponent
  },
  {
    path:'**',
    component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
