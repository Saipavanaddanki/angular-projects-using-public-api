import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'angular2';
  products!:any[]
  constructor(){
    fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>{console.log(data); this.products=data});

  }
  api(url:string){
    fetch(url).then((res)=>res.json()).then((data)=>{console.log(data); this.products=data});
  }
  mens(){
      this.api("https://fakestoreapi.com/products/category/men's clothing")
  }
  womens(){
        this.api("https://fakestoreapi.com/products/category/women's clothing")
  }
  electronics(){
        this.api("https://fakestoreapi.com/products/category/electronics")
  }

  jewelery(){
    this.api("https://fakestoreapi.com/products/category/jewelery");
  }
}
