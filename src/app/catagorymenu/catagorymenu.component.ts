import { Component } from '@angular/core';

@Component({
  selector: 'app-catagorymenu',
  templateUrl: './catagorymenu.component.html',
  styleUrls: ['./catagorymenu.component.css'],
})
export class CatagoryMenuComponent {
  catagories = [
    {
      topic: 'Free Shipping',
      color: 'green',
    },
    {
      topic: 'Big Brand',
      color: 'red',
    },
    {
      topic: 'Electronic Zone',
      color: 'bisque',
    },
    {
      topic: 'Gamer Zone',
      color: 'blueviolet',
    },
    {
      topic: 'Fashion Zone',
      color: 'burlywood',
    },
    {
      topic: 'Shopee Mart',
      color: 'cadetblue',
    },
    {
      topic: 'Coin Rewards',
      color: 'chocolate',
    },
    {
      topic: 'Vouchers',
      color: 'cornflowerblue',
    },
    {
      topic: 'Partner Privileges',
      color: 'coral',
    },
  ];
  constructor() {}
}
