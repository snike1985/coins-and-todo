import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../interfaces/todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
        console.log(this.todo);
    }

    public onToggle(event) {
        console.log(event);
        this.todo.completed = event.checked;
    }

    public onDelete() {
        this.delete.emit(this.todo);
    }
}