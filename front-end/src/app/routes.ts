import {Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CardPageComponent } from './card-page/card-page.component';

import {ViewproductComponent} from './viewproduct/viewproduct.component'
import { PrivatePageComponent } from './private-page/private-page.component'
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    { path: '/', redirectTo: 'home'},
    { path: 'home',  component: HomePageComponent},
    {
      path: 'private', component: PrivatePageComponent
    },
    { 
      path:'tours', 
      component: CardPageComponent
    },
    {
      path: 'signup',
      component: SignupFormComponent
    },
    {
      path:'login',
      component: SignupFormComponent
    },
    {
      path:'tours/:id',
      component: ViewproductComponent
    },

];

