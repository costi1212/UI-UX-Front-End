import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {HttpClientModule} from "@angular/common/http";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {TagModule} from "primeng/tag";
import { SignInComponent } from './sign-in/sign-in.component';
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SidenavComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    AppRoutingModule,
    DataViewModule,
    DropdownModule,
    TagModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
