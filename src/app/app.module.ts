import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TermekekDisplayComponent } from './termekek-display/termekek-display.component';
import { ProductService } from './product.service';
import { TermekBlockDisplayComponent } from './termek-block-display/termek-block-display.component';


@NgModule({
  declarations: [
    AppComponent,
    TermekekDisplayComponent,
    TermekBlockDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
