import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})

export class MaterialComponent implements OnInit {
  myControl = new FormControl();

  constructor() { }

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''), map(value =>this._filter(value)))
  }
  private _filter(value: string) : string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(options => options.toLowerCase().includes(filterValue));
  }

  hidden = false;
  toggleBadgeVisibility(){
    this.hidden = !this.hidden;
  }
  like = 100;
  likes(){
    this.like = this.like + 1;
  }
}
