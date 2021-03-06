import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

    constructor(private matDialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: object) {
    }

    ngOnInit() {
    }

    public dialogClose() {
        console.log('close dialog modal window');
        this.matDialogRef.close();
    }
}
