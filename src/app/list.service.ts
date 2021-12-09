import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item{
  id : any;
  image : any;
  name : any;
  category : any;
  price : any;
  description : any;
  qnt : any;
}

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http : HttpClient) { }

  // getItem(){
  //   return this.http.get('assets/items.json')
  // }
  getItems(){
    return this.http.get<any>('assets/items.json', {responseType: 'json'})
    .toPromise()
    .then(res => <Item[]>res.menu)
    .then(item => {return item;});
  }

  getOneItem(id:any){
    return this.http.get<any>('assets/items.json', {responseType: 'json'})
    .pipe(map((response:any) => {
      // console.log(id);
        return response.menu.find((item:Item) => {
          // console.log(id);
          return item.id == id;
        });
        
      }))
  }
  bookItem(name:any){
    return this.http.get<any>('assets/items.json', {responseType: 'json'})
    .pipe(map((response:any) => {
      // console.log(id);
        return response.menu.find((item:Item) => {
          // console.log(id);
          return item.name == name;
        });
        
      }))
  }
  bookItems(id:any){
    return this.http.get<any>('assets/items.json', {responseType: 'json'})
    .pipe(map((response:any) => {
      // console.log(id);
        return response.menu.find((item:Item) => {
          // console.log(id);
          return item.id == id;
        });
        
      }))
  }
  listcart: any[] = [];
  bookItemss(data:any){
    const localStorageKeys = { ...localStorage };
    for (const index in localStorageKeys) {
        data = index;
      }
    
  }
}
