import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListService, Item } from '../list.service';
import { Order } from './inputs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  selectedItem! : Item; 

  model!: Order;
  constructor(private route: ActivatedRoute, private listService: ListService) {

    // this.model = new Order ('', 0, '', '', '', '', 0)
   }
   submitdata = new FormGroup({
     item : new FormControl('', Validators.required),
     price : new FormControl('', Validators.required),
     fname : new FormControl('', Validators.required),
     lname : new FormControl('', Validators.required),
     address : new FormControl('', Validators.required),
     city : new FormControl('', Validators.required),
     zip : new FormControl('', Validators.required)
   })
 
  ngOnInit(): void {
    const name:any = this.route.snapshot.params.name;
    // console.log(name);
    // console.log(price);
    this.listService.bookItem(name)
    .subscribe((itm) => {
      // console.log('res', itm);
      this.selectedItem = itm;
      this.submitdata = new FormGroup({
        item : new FormControl(this.selectedItem.name, Validators.required),
        price : new FormControl(this.selectedItem.price, Validators.required),
        fname : new FormControl('', Validators.required),
        lname : new FormControl('', Validators.required),
        address : new FormControl('', Validators.required),
        city : new FormControl('', Validators.required),
        zip : new FormControl('', Validators.required)
      })
    });

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
 }

  get ErrorMessage() {
    return this.submitdata.controls;
  }

}
