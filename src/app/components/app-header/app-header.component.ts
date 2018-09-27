import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    public openModal() {
        console.log('open modal window');
        this.dialog.open(DialogComponent, {
            data: {name: 'Dialog modal window', animal: 'Dog'}
        });
    }
}
