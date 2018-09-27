import {Injectable} from '@angular/core';
import {Todo} from '../interfaces/todo';

const todosData: Todo[] = [
    {
        title: 'Task 1',
        completed: true
    },
    {
        title: 'Task 2',
        completed: false
    },
    {
        title: 'Task 3',
        completed: false
    }
];

@Injectable()
export class TodoService {
    private todos: Todo[] = todosData;

    constructor() {
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    createTodo(title: string) {

    }

    deleteTodo(todo: Todo) {
        const index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
    }
}
