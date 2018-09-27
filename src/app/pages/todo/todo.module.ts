import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent} from './todo.component';
import {TodoFormModule} from '../../components/todo-form/todo-form.module';
import {TodoItemModule} from '../../components/todo-item/todo-item.module';
import {CustomMaterialModule} from '../../components/custom-material/custom-material.module';
import {TodoService} from '../../services/todo.service';

@NgModule({
    imports: [
        CommonModule,
        TodoRoutingModule,
        TodoFormModule,
        TodoItemModule,
        CustomMaterialModule
    ],
    declarations: [TodoComponent],
    providers: [TodoService]
})
export class TodoModule {
}
