import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomMaterialModule} from '../../components/custom-material/custom-material.module';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        CustomMaterialModule
    ],
    declarations: [MainComponent]
})
export class MainModule {
}
