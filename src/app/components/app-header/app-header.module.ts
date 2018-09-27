import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppHeaderComponent} from './app-header.component';
import {MenuModule} from '../menu/menu.module';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        MenuModule,
        CustomMaterialModule,
        RouterModule
    ],
    declarations: [AppHeaderComponent],
    exports: [AppHeaderComponent]
})
export class AppHeaderModule {
}
