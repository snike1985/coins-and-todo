import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoFormComponent} from './todo-form.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule,
        ReactiveFormsModule
    ],
    declarations: [TodoFormComponent],
    exports: [TodoFormComponent]
})
export class TodoFormModule {
}
