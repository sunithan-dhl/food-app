import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout1Component } from './checkout1/checkout1.component';
import { DetailComponent } from './detail/detail.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { MaterialComponent } from './material/material.component';
import { MulilevelComponent } from './mulilevel/mulilevel.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: 'list', component : FoodlistComponent},
  {path: 'detail/:id', component : DetailComponent},
  {path: 'material', component: MaterialComponent},
  {path: 'order/:name', component : OrderComponent},
  {path: 'cart', component : CartComponent},
  {path: 'checkout/:id', component : CheckoutComponent},
  {path: 'checkout1', component : Checkout1Component},
  {path: 'multi', component: MulilevelComponent},
  {path:   '',  redirectTo:   'list', pathMatch:   'full'},
  {path: '**', redirectTo:   '/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
