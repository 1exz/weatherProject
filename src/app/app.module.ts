import { Component, NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { PriceComponent } from './price/price.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NewServiceService } from './new-service.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';

  const appRoutes:Routes=[
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'news', component:NewsComponent},
    {path:'price', component:PriceComponent},
    {path:'**', component:NotFoundComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    PriceComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
