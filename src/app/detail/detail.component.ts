import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService, Item } from '../list.service';
import { CartService } from '../cart.service';
import {ConfirmationService, MessageService} from 'primeng/api';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  selectedItem!: Item;
  listcart: any[] = [];
  listAllCart: any[] = [];
  listAllQuantity: any[] = [];
  // items : Array<Item> = [];

  productArray: any[] = [];
  constructor(private route: ActivatedRoute, private listService : ListService, private  confirmationService: ConfirmationService, private messageService: MessageService, private cartService: CartService) { 
    
  }
  // @Input() matBadge! : string; 
  detail: any = [];
  itemInCart!: number;
  ngOnInit(): void {
    const id:any = this.route.snapshot.params['id'];
    // console.log(id);
    // debugger;
    this.listService.getOneItem(id)
      .subscribe((item) => {
        // debugger;
        // console.log(id)
        // console.log('res', item.name);
        this.selectedItem = item;
        // console.log(this.selectedItem);
      });
      this.cartService.cartItems.subscribe(d=>{
        this.itemInCart = d.length;
      })
      // this.matBadge = JSON.parse(localStorage.getItem(`${id}q`) ||'[]');
    
      // this.listcart = JSON.parse(localStorage.getItem(`${id}pro`) ||'[]');
      // this.listcart = data;
      // console.log('cart',this.listcart);
      // console.log(this.listcart);  
  for(var i=0; i < localStorage.length; i++){
      // let keyName= localStorage.key(i);
      // this.listcart = keyName.split(',');
      // this.listcart = this.listcart ? this.listcart.split(',') : [];
      // console.log(this.listcart);
      // console.log( keyName + " === " +localStorage.getItem(`${keyName}`));
  }

    // this.datatable = this.matBadge > 0 ? 'show' : 'hide';
    console.log(this.datatable);


    // fetch all data from local storage
      const localStorageKeys = { ...localStorage };
      for (const index in localStorageKeys) {
        if (index.includes('pro')) {
          this.listAllCart.push(JSON.parse(localStorageKeys[index]));
          console.log(this.listAllCart);
        }
        // else{}
      //   if(index.includes('q')){
      //     this.listAllCart.push({'qun': JSON.parse(localStorageKeys[index])}); 
      // }
      }
      for(const index in localStorageKeys){
        
      }
    
  }


  
  quantity : number = 1;
  matBadge!: number;
  datatable = 'show';
  
  confirm(event: Event) {
    
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Click yes to proceed',
        icon: 'pi pi-info-circle',
        accept: () => {
            // this.messageService.add({severity:'info', summary:'Success', detail:'Added to cart'});
            this.matBadge = this.quantity;
            const it = this.selectedItem;
            // var vl = JSON.stringify(it)+',' +JSON.stringify({"qn":this.matBadge});
            localStorage.setItem(`${this.selectedItem.id}pro`,JSON.stringify(this.selectedItem)); 
            // this.syncItems();
            // this.listAllCart.push({'qn': this.syncItems()})
            this.datatable = this.matBadge > 0 ? 'show' : 'hide';
            // console.log(cc.push({'qn': this.matBadge}));

        },
        reject: () => {
            this.messageService.add({severity:'error', summary:'Rejected', detail:'Not added to cart'});
        }
        
    });
    

  }
  
  syncItems(){
    
    localStorage.setItem(`${this.selectedItem.id}q`,JSON.stringify(this.matBadge)); // sync the data
    // localStorage.setItem(this.selectedItem.id,JSON.stringify(this.selectedItem)); // sync the data

  }
  idx: any;
  add(selectedItem:any, idx:any)
  {
    const found = this.productArray.find(
      item => JSON.stringify(item) === JSON.stringify(selectedItem),
      localStorage.setItem(`${this.selectedItem.id}pro`,JSON.stringify(this.selectedItem))
    );
    if(found){
      this.productArray[idx].qtn++;
    }
    else{
      this.productArray.push(selectedItem);
    }
    // this.messageService.add({severity:'info', summary:'Success', detail:'Added to cart'});
    console.log(this.productArray)
  }

  addToCart(item: Item){
    this.cartService.addItem(item);
    // this.messageService.add({severity:'info', summary:'Success', detail:'Added to cart'});
    // alert('Added to cart')
  }
  
  
}
