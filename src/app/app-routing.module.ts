import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermekekDisplayComponent } from './termekek-display/termekek-display.component';
import { TermekProfileComponent } from './termek-profile/termek-profile.component';
import { CategoryTermekFinderComponent } from './category-termek-finder/category-termek-finder.component';
import { TermekFoundedbyCategoryComponent } from './termek-foundedby-category/termek-foundedby-category.component';

import { AuthGuardService } from './auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { KosarMainComponent } from './kosar-main/kosar-main.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  { path: 'products', component: TermekekDisplayComponent  },
  { path: 'products/categoryfinder/:id', component: TermekFoundedbyCategoryComponent },
  { path: 'products/:id', component: TermekProfileComponent },
  { path: 'category', component: CategoryTermekFinderComponent },
  { path: 'kosar',
    component: KosarMainComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'chat',
    component: MessageComponent,
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  
})
export class AppRoutingModule { }
