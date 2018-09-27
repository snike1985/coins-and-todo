import {Component, OnInit} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    public todos: Todo[];

    constructor(private todoService: TodoService) {
        this.todos = [];
    }

    ngOnInit() {
        this.todos = this.todoService.getTodos();
    }

    delete(item: Todo) {
        this.todoService.deleteTodo(item);
    }

    toggle(item: Todo) {
        this.todoService.toggleTodo(item);
    }
}
