import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Todo} from '../../interfaces/todo';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
    @Input() todos: Todo[];
    public todoForm: FormGroup;

    constructor() {
        this.todoForm = new FormGroup({
            task: new FormControl()
        });
    }

    ngOnInit() {
    }

    public create() {
        this.todos.push({
            title: this.todoForm.value.task,
            completed: false
        });

        console.log(this.todoForm);
        this.todoForm.reset();
    }
}
