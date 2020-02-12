import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SearchPipe } from './pipes/search.pipe';
import { FilterPipe } from './pipes/filter1.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddContactComponent,
    NotFoundComponent,
    SearchPipe,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollToModule .forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
