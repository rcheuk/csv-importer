import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { ImportComponent } from './import/import.component';
import { SearchComponent } from './search/search.component';

import { RoutingModule } from './common/routing/routing.module';
import { ImportRoutingModule } from './import/import.routing.module';
import { SearchRoutingModule } from './search/search.routing.module';

import { AlertModule } from 'ngx-bootstrap';

import { JsonTransform } from './search/JsonTransform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    ImportComponent,
    SearchComponent,
    JsonTransform,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ImportRoutingModule,
    SearchRoutingModule,
    RoutingModule,
    AlertModule.forRoot(),
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
