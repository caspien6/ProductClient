import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TermekekDisplayComponent } from './termekek-display/termekek-display.component';
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
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HttpModule } from '@angular/http';
import { AuthService } from './controllers/Auth';
import { KosarMainComponent } from './kosar-main/kosar-main.component';
import { MessageComponent } from './message/message.component';
import { GrowlModule } from 'primeng/primeng';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/components/common/messageservice';
import {InputTextModule} from 'primeng/inputtext';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ButtonModule} from 'primeng/button';
import {ChatService} from './chat.service';


@NgModule({

  declarations: [
    AppComponent,
    TermekekDisplayComponent,
    TermekBlockDisplayComponent,
    CategoryDisplayComponent,
    TermekProfileComponent,
    CategoryTermekFinderComponent,
    TermekFoundedbyCategoryComponent,
    ProfileComponent,
    RegistrationFormComponent,
    KosarMainComponent,
    MessageComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    GrowlModule,
    MessagesModule,
    MessageModule,
    InputTextModule,
    ScrollPanelModule,
    ButtonModule
  ],
  providers: [
    CategoryService,
    TermekService,
    VevoService,
    KosarService,
    AuthGuardService,
    AuthService,
    AuthenticationService,
    MessageService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
