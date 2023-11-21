import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./commponents/dashboard/dashboard.component";
import {ProductsComponent} from "./commponents/products/products.component";
import {StatistticsComponent} from "./commponents/statisttics/statisttics.component";
import {PagesComponent} from "./commponents/pages/pages.component";
import {MediaComponent} from "./commponents/media/media.component";
import {SettingsComponent} from "./commponents/settings/settings.component";
import {SelectUserComponent} from "./commponents/select-user/select-user.component";
import {HomeComponent} from "./commponents/home/home.component";
import {BodyComponent} from "./commponents/body/body.component";
import {MyAnimalsComponent} from "./commponents/my-animals/my-animals.component";
import {RegisterAnimalsComponent} from "./commponents/register-animals/register-animals.component";
import {MyAnimalsTableComponent} from "./commponents/my-animals-table/my-animals-table.component";

const routes: Routes = [
  {path: '', redirectTo: 'select-user', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'select-user', component:SelectUserComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'my-animals', component: MyAnimalsComponent},
  {path: 'register-animals', component: RegisterAnimalsComponent},
  {path: 'my-animals-table/:specie', component: MyAnimalsTableComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatistticsComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'body', component:BodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
