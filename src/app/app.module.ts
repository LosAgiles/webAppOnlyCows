import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectUserComponent } from './commponents/select-user/select-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './commponents/home/home.component';
import { SidenavComponent } from './commponents/sidenav/sidenav.component';
import { DashboardComponent } from './commponents/dashboard/dashboard.component';
import { ProductsComponent } from './commponents/products/products.component';
import { StatistticsComponent } from './commponents/statisttics/statisttics.component';
import { CoupensComponent } from './commponents/coupens/coupens.component';
import { PagesComponent } from './commponents/pages/pages.component';
import { MediaComponent } from './commponents/media/media.component';
import { SettingsComponent } from './commponents/settings/settings.component';
import { BodyComponent } from './commponents/body/body.component';
import { MyAnimalsComponent } from './commponents/my-animals/my-animals.component';
import { HeaderComponent } from './commponents/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { RegisterAnimalsComponent } from './commponents/register-animals/register-animals.component';
import {MatButtonModule} from "@angular/material/button";
import { MyAnimalsTableComponent } from './commponents/my-animals-table/my-animals-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectUserComponent,
    HomeComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatistticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    BodyComponent,
    MyAnimalsComponent,
    HeaderComponent,
    RegisterAnimalsComponent,
    MyAnimalsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
