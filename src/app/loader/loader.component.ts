import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, AfterViewInit {

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
    this.isLoading = true;
  }
  ngAfterViewInit(){
    setTimeout(()=>this.isLoading = false,2000);
}

}
