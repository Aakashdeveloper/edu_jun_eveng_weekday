import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component'
import { ProductComponent } from "./products/product.component";
import { upperValuePipe } from "./products/upperValue.pipe";
import { AddValuePipe } from "./products/addValue.pipe";
import { ProductFilterPipe } from "./products/productFilter.pipe";

@NgModule({

    //All Module decl here
    imports:[
        BrowserModule,
        FormsModule
    ],
    //All Component & Pipe
    declarations:[
        AppComponent,
        DashboardComponent,
        ProductComponent,
        upperValuePipe,
        AddValuePipe,
        ProductFilterPipe
    ],
    //Only First Component
    bootstrap:[
        AppComponent
    ],
    //All Services decl here
    providers:[]
})

export class AppModule{

}