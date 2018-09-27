import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    public authForm: FormGroup;

    constructor() {
        this.authForm = new FormGroup({
            login: new FormControl(),
            password: new FormControl()
        });
    }

    ngOnInit() {
    }

    public save() {
        console.log(this.authForm);
    }
}
