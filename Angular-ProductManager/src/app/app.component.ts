import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product;
  ngOnInit(){
    this.product = {
      title: '',
      price: 0,
      img_url: ''
    };
    this.product.title
    this.product
  }
}
