import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    public menuItems: Array<Object> = [
        {
            icon: 'home',
            title: 'Home',
            route: ''
        },
        {
            icon: 'dialpad',
            title: 'Coins',
            route: '/list'
        },
        {
            icon: 'info',
            title: 'About us',
            route: '/about'
        },
        {
            icon: 'info',
            title: 'To do',
            route: '/todo'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
