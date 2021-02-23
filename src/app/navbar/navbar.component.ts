import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  productTrends = [
    'รองเท้าผ้าใบสีขาว',
    'เดรสออกงาน',
    'กระเป๋าAdidas',
    'สร้อยคอเงิน',
    'ขนมญี่ปุ่น',
    'ชุดเดรสสีขาว',
    'กระเป๋าสตางค์ใบยาวผู้หญิง',
    'กางเกงยีนส์สีขาว',
  ];
  title: string = 'xxx';
  constructor() {}
}
