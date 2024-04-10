import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';
import { Menu } from './order.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private baseURL = environment.baseURL;
    private menu = 'menu';

    constructor(
        private http: HttpClient
    ) { }

    getMenus() {
        const url = this.baseURL + this.menu;
        return this.http.get(url).pipe(map((value) => {
            const menus = value as Menu[];
            menus.map(res => {
                res.quantity = 0;
            });

            return menus;
        }));
    }

}