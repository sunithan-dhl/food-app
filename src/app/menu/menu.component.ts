import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private cartService: CartService) { }
  items: MenuItem[] = [];
  itemInCart!: number;
  ngOnInit(): void {
    this.items = [
      {
          label:'Food List',
          // icon:'pi pi-fw pi-file',
          routerLink: '/list'
      }
    
  ];
  this.cartService.cartItems.subscribe(d=>{
    this.itemInCart = d.length;
  })
  }

}
