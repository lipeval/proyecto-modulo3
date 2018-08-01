import {Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CardPageComponent } from './card-page/card-page.component';

import {ViewproductComponent} from './viewproduct/viewproduct.component'

export const routes: Routes = [
    { path: 'home',  component: AppComponent },
    { 
      path:'products', 
      component: CardPageComponent
    },
    {
      path: 'signup',
      component: SignupFormComponent
    },
    {
      path:'products/:id',
      component: ViewproductComponent
    }

];

