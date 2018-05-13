import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermekekDisplayComponent } from './termekek-display/termekek-display.component';
import { TermekProfileComponent } from './termek-profile/termek-profile.component';
import { CategoryTermekFinderComponent } from './category-termek-finder/category-termek-finder.component';
import { TermekFoundedbyCategoryComponent } from './termek-foundedby-category/termek-foundedby-category.component';

const routes: Routes = [
  { path: 'products', component: TermekekDisplayComponent  },
  { path: 'products/categoryfinder/:id', component: TermekFoundedbyCategoryComponent },
  { path: 'products/:id', component: TermekProfileComponent },
  { path: 'category', component: CategoryTermekFinderComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  
})
export class AppRoutingModule { }
