import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Menu } from './order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {

  data: Menu[] = [];
  totalSummary: number = 0;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orderService.getMenus().pipe().subscribe(result => {
      if (result) {
        this.data = result as Menu[];
      }
    });
  }

  decrementMenu(menu: Menu) {
    if (menu.quantity > 0) {
      menu.quantity--;
    }
  }

  incrementMenu(menu: Menu) {
    menu.quantity++;
  }

  calculateTotalSum() {
    return this.data.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  }

  order() {
    const isLogin = sessionStorage.getItem('isLogin');
    if (isLogin) {
      return;
    }
    alert('You need to login first');
    
    this.router.navigate(['/login']);
  }

}
