import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartService } from '../cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListService, Item } from '../list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items : Item[] = [];
  total!: number;
  displayResponsive!: boolean;

  constructor(private cartService: CartService, private messageService: MessageService,private router: Router, private route : ActivatedRoute) { }

  submitdata = new FormGroup({
    fname : new FormControl('', Validators.required),
    lname : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    zip : new FormControl('', Validators.required)
  })


  ngOnInit(): void {
    this.cartService.cartItems.subscribe(data=>{
      this.items = data;

      if(this.items) this.getTotal(this.items);
    });
    // console.log(this.items);
  }
  onDelete(i:any){
    this.items.splice(i, 1);
    this.cartService.setCartData(this.items);
    this.getTotal(this.items);
    
    this.messageService.add({severity:'error', summary:'Deleted', detail:'Deleted from cart'});
  }
  validateInput(event: any, i: any){
    const qnt = +event.target.value;
    if(qnt < 1){
      event.target.value = this.items[i].qnt;
      return;
    }
    this.qntUpdate(qnt, i)
  }
  private qntUpdate(qnt: any, i: any){
    this.items[i].qnt = qnt;
    this.cartService.setCartData(this.items);
    this.getTotal(this.items);
  }
  onCheckout(){
    this.displayResponsive = true;
  }
  getTotal(data:any){
    let subs  = 0;
    for(const item of data){
      subs += item.price * item.qnt;
      this.total = subs;
    }    
  }

  show : any;
  onSubmit(){
    if (this.submitdata.invalid) {
      this.messageService.add({severity:'error', summary:'Required', detail:'Required all fields'});      
      return ;
  }
    // console.log(onsubmit);
    // console.log(this.submitdata.value);
    // alert('Successfully sent');
    this.messageService.add({severity:'success', summary:'Successful', detail:'Successfully Order Placed'});
     this.show = this.submitdata.value;
     this.displayResponsive = false;
     localStorage.removeItem('cart');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    
 }

  get ErrorMessage() {
    return this.submitdata.controls;
  }

}
