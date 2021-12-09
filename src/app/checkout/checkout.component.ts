import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListService, Item } from '../list.service';
// import { Order } from './inputs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  selectedItem! : Item; 

  constructor(private route: ActivatedRoute, private listService: ListService) {

    // this.model = new Order ('', 0, '', '', '', '', 0)
   }
   submitdata = new FormGroup({
     item : new FormControl('', Validators.required),
     price : new FormControl('', Validators.required),
     quantity : new FormControl('', Validators.required),
     fname : new FormControl('', Validators.required),
     lname : new FormControl('', Validators.required),
     address : new FormControl('', Validators.required),
     city : new FormControl('', Validators.required),
     zip : new FormControl('', Validators.required)
   })

   matBadge!: number;
   listcart: any[] = [];
   quantity!: number;
  //  value1:number = this.quantity;
   
  ngOnInit(): void {
    const id:any = this.route.snapshot.params['id'];
    // console.log(id);
    // console.log(price);
    
    
    this.listService.bookItems(id)
    .subscribe((itm) => {
      // console.log('res', itm);
      this.selectedItem = itm;
      this.submitdata = new FormGroup({
        item : new FormControl(this.selectedItem.name, Validators.required),
        price : new FormControl(this.selectedItem.price*this.matBadge, Validators.required),
        quantity : new FormControl(this.matBadge, Validators.required),
        fname : new FormControl('', Validators.required),
        lname : new FormControl('', Validators.required),
        address : new FormControl('', Validators.required),
        city : new FormControl('', Validators.required),
        zip : new FormControl('', Validators.required)
      })
    });

    this.matBadge = JSON.parse(localStorage.getItem(`${id}q`) ||'[]');
    this.listcart = JSON.parse(localStorage.getItem(`${id}pro`) ||'[]');
    // console.log(this.listcart);
    this.syncItems();
  }
  onQuantityChange(e:any){
    const quan = e.value;
    this.submitdata.controls['price'].setValue(this.selectedItem.price * quan);
    localStorage.setItem(`${this.selectedItem.id}q`,JSON.stringify(quan));
  }
  
  show : any;
  onSubmit(){
    if (this.submitdata.invalid) {
      alert('required all fields');      
      return ;
  }
    // console.log(onsubmit);
    // console.log(this.submitdata.value);
    alert('Successfully sent');
     this.show = this.submitdata.value;
     this.syncItems();
 }

  get ErrorMessage() {
    return this.submitdata.controls;
  }
    
  syncItems(){
  //   const id:any = this.route.snapshot.params['id'];
  //  this.matBadge = this.submitdata.value.quantity;
  //   localStorage.setItem(`${id}q`,JSON.stringify(this.matBadge)); // sync the data
  //   // localStorage.setItem(`${this.selectedItem.id}pro`,JSON.stringify([this.selectedItem])); 
  //   console.log(this.matBadge);
  }

}
