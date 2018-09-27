import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule,
        RouterModule
    ],
    declarations: [MenuComponent],
    exports: [MenuComponent]
})
export class MenuModule {
}
