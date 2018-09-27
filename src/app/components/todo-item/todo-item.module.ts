import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoItemComponent} from './todo-item.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';

@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule
    ],
    declarations: [TodoItemComponent],
    exports: [TodoItemComponent]
})
export class TodoItemModule {
}
