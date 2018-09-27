import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppHeaderModule} from './components/app-header/app-header.module';
import {CustomMaterialModule} from './components/custom-material/custom-material.module';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { DialogComponent } from './components/dialog/dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        DialogComponent
    ],
    imports: [
        BrowserModule,
        AppHeaderModule,
        CustomMaterialModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent],
    entryComponents: [DialogComponent]
})
export class AppModule {
}
