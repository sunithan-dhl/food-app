import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService, Item } from '../list.service';
import { PrimeNGConfig, SelectItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import * as AOS from 'aos';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css'],
  providers: [MessageService]
})


export class FoodlistComponent implements OnInit {
  // item = [] as any; 
  item : Item[] = [];
  selectedItem: Item | undefined;
  sortOptions!: SelectItem[];
  filterOptions! : any[];
  sortOrder!: number;
  sortField!: string;
  value!: string;
  sortKey!: string;
  itemInCart!: number;
  @ViewChild('dt') dt!: Table;
  constructor(private listService : ListService, private primengConfig: PrimeNGConfig, private cartService: CartService) {

   }

  ngOnInit(): void {
    
    AOS.init();
  
    this.cartService.cartItems.subscribe(d=>{
      this.itemInCart = d.length;
    })

    this.listService.getItems().then(item => {
      this.item = item;
      // console.log(item);
    })
       

    this.sortOptions = [
      {label : 'Price High to Low', value: '!price'},
      {label : 'Price Low to High', value : 'price'}
    ];
    this.primengConfig.ripple = true;

    this.filterOptions = [
      {label : 'BreakFast', value: 'breakfast'},
      {label : 'Lunch', value : 'lunch'},
      {label : 'Evening Snacks', value : 'evening'},
      {label : 'Dinner', value : 'dinner'}
    ];
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt.filter(($event.target as HTMLInputElement).value, 'contains', stringVal);
  }
  

  onSortChange(event:any){
    let value = event.value;
    if(value.indexOf('!') === 0){
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.lenght);
    }
    else{
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  stopListening=false;

  filterItem($event: any,  stringVal: any){
    let value = $event.value;
    this.dt.filter(value, 'equals', stringVal);
  }

  getOneItems(id:any) {
    this.listService.getOneItem(id)
      .subscribe((item) => {
        this.selectedItem = item;
        console.log(item)
      })
  }
  
 
}
