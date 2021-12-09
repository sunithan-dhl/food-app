import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListService, Item } from './list.service';
import {MessageService} from 'primeng/api';
@Injectable({
  providedIn: 'root'
})

export class CartService {
  placeholder: any; 
  cartItems = new BehaviorSubject<any>([]);
  constructor(private messageService: MessageService) { 
    const ls = this.getCartData();
    if(ls) this.cartItems.next(ls);
  }
  addItem(pro: Item){
    const ls = this.getCartData();
    this.messageService.add({severity:'info', summary:'Success', detail:'Added to cart'});
    let exist!:Item;

    if(ls){
      exist = ls.find((item:any)=>{
        return item.id == pro.id;
      });
    }

    if(exist){ 
      exist.qnt++;
      this.setCartData(ls);
    }
    else{
      if(ls){
        const newData = [...ls, pro];
        this.setCartData(newData);
        this.cartItems.next(this.getCartData());
      }
        this.placeholder.push(pro);
        this.setCartData(this.placeholder); 
        this.cartItems.next(this.getCartData());
        
      
    }
  } 
  setCartData(data:any){
    localStorage.setItem('cart', JSON.stringify(data));
  }
  getCartData(){
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
}
