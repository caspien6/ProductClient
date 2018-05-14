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
import { VevoService } from './controllers/Vevo';
import { KosarService } from './controllers/Kosar';
import { KosarMainComponent } from './kosar-main/kosar-main.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';




@NgModule({
  
  declarations: [
    AppComponent,
    TermekekDisplayComponent,
    TermekBlockDisplayComponent,
    CategoryDisplayComponent,
    TermekProfileComponent,
    CategoryTermekFinderComponent,
    TermekFoundedbyCategoryComponent,
    KosarMainComponent
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
    VevoService,
    KosarService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
