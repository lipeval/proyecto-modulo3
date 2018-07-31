import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import { CardPageComponent } from './card-page/card-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
