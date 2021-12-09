import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Attribute, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListService, Item } from '../list.service';

@Component({
  selector: 'app-checkout1',
  templateUrl: './checkout1.component.html',
  styleUrls: ['./checkout1.component.css']
})
export class Checkout1Component implements OnInit, AfterViewInit {

  selectedItem! : Item; 
  price!:number;
  quantities!:number;
   listcart: any[] = [];
   quantity!: number;
   att!: number;
   
  constructor(private route: ActivatedRoute, private listService: ListService, public elm: ElementRef) {}
  
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
   @ViewChild("pricedata", { static: true })
   pricedata!: ElementRef;
  ngOnInit(): void {
    const id:any = this.route.snapshot.params['id'];
    // console.log(id);
    // console.log(price);
    
    
    // this.listService.bookItemss(data)
    // .subscribe((data) => {
    //   this.submitdata = new FormGroup({
    //     item : new FormControl('', Validators.required),
    //     price : new FormControl(data.price, Validators.required),
    //     quantity : new FormControl('', Validators.required),
    //     fname : new FormControl('', Validators.required),
    //     lname : new FormControl('', Validators.required),
    //     address : new FormControl('', Validators.required),
    //     city : new FormControl('', Validators.required),
    //     zip : new FormControl('', Validators.required)
    //   })
    // });

    const localStorageKeys = { ...localStorage };
    for (const index in localStorageKeys) {
      if (index.includes('pro')) {
        this.listcart.push(JSON.parse(localStorageKeys[index]));
        console.log(this.listcart);
        // this.values1 = this.listcart[index].name;
      }
    
  }
  
  // for(let i = 0; i < this.listcart.length; ++i){
  //   setTimeout(() => {
  //     var anyid = document.getElementById( `${this.listcart[i].id}`)!
  //     const idrow = anyid.getAttribute(`dataid`); 
  //     console.log(idrow); 
  //     if (this.listcart[i].id == idrow ) {

  //       this.submitdata = new FormGroup({
  //             item : new FormControl('', Validators.required),
  //             price : new FormControl(this.listcart[i].price, Validators.required),
  //             quantity : new FormControl(this.listcart[i].qnt, Validators.required),
  //             fname : new FormControl('', Validators.required),
  //             lname : new FormControl('', Validators.required),
  //             address : new FormControl('', Validators.required),
  //             city : new FormControl('', Validators.required),
  //             zip : new FormControl('', Validators.required)
  //           });
  
  //       const qn = this.listcart[i].price;
  //       // console.log(idrow);
        
  //     }
  //   }, 10);
    
  // }
  // this.values1 = this.listcart.name;
}
ngAfterViewInit() {
  setTimeout(() => {
    for(let i = 0; i < this.listcart.length; ++i){
      setTimeout(() => {
        var anyid = document.getElementById( `${this.listcart[i].id}`)!
        const idrow = anyid.getAttribute(`dataid`); 
        console.log(idrow); 
        if (this.listcart[i].id == idrow ) {
  
          this.submitdata = new FormGroup({
                item : new FormControl('', Validators.required),
                price : new FormControl(this.listcart[i].price, Validators.required),
                quantity : new FormControl(this.listcart[i].qnt, Validators.required),
                fname : new FormControl('', Validators.required),
                lname : new FormControl('', Validators.required),
                address : new FormControl('', Validators.required),
                city : new FormControl('', Validators.required),
                zip : new FormControl('', Validators.required)
              });
    
          const qn = this.listcart[i].price;
          // console.log(idrow);
          
        }
      }, 10);
      
    }
  }, 1000);
}
  show : any;
  onSubmit(){
    if (this.submitdata.invalid) {
      // alert('required all fields');      
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
  }
  inc(data:any){
   data.qnt = data.qnt + 1;

  }
  dec(data:any){
    if(data.qnt !=1){
        data.qnt -= 1;
    }
  }
  remove(id:any){
    // localStorage.removeItem(`${this.selectedItem.id}pro`);
    // console.log(`${this.selectedItem.id}pro`);
    for(let i = 0; i < this.listcart.length; ++i){
      if (this.listcart[i].id === id) {
          this.listcart.splice(i,1);
          localStorage.removeItem(`${id}pro`);
      }
  }
  }
  onQuantityChange(id:any){
    const quan = id.value;
    for(let i = 0; i < this.listcart.length; ++i){
      if (this.listcart[i].id === id) {
          this.listcart[i].price * quan;
          console.log(this.listcart[i].price * quan)
          // this.listcart.splice(i,1);
          // localStorage.removeItem(`${id}pro`);
      }
    }
    console.log(id)
  }

}
