import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {FormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import {HttpModule} from '@angular/http';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from './material.module'
import {AuthService} from './auth.service'


import {MatGridListModule} from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { CardPageComponent } from './card-page/card-page.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

import {routes} from './routes';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivatePageComponent } from './private-page/private-page.component';
import { ToursService } from './services/tours.service';

@NgModule({
  declarations: [
    AppComponent,
    CardPageComponent,
    SignupFormComponent,
    ViewproductComponent,
    HomePageComponent,
    PrivatePageComponent

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    NgbModule.forRoot(),
    MatGridListModule
   
  ],
  providers: [ToursService, AuthService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
