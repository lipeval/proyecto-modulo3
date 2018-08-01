import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import {HttpModule} from '@angular/http'
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from './material.module'
import {AuthService} from './auth.service'


import { AppComponent } from './app.component';
import { CardPageComponent } from './card-page/card-page.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

import {routes} from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsService } from 'services/cards.service';
import { MatGridListModule } from '../../node_modules/@angular/material';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPageComponent,
    SignupFormComponent,
    ViewproductComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule
  ],
  providers: [CardsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
