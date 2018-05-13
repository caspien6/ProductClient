import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TermekekDisplayComponent } from './termekek-display/termekek-display.component';
import { ProductService } from './product.service';
import { TermekBlockDisplayComponent } from './termek-block-display/termek-block-display.component';
import { CategoryService } from './controllers/Category';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { TermekProfileComponent } from './termek-profile/termek-profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { TermekService } from './controllers/Termek';
import { CategoryTermekFinderComponent } from './category-termek-finder/category-termek-finder.component';
import { TermekFoundedbyCategoryComponent } from './termek-foundedby-category/termek-foundedby-category.component';




@NgModule({
  
  declarations: [
    AppComponent,
    TermekekDisplayComponent,
    TermekBlockDisplayComponent,
    CategoryDisplayComponent,
    TermekProfileComponent,
    CategoryTermekFinderComponent,
    TermekFoundedbyCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,    
  ],
  providers: [ProductService, 
    CategoryService, 
    TermekService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
