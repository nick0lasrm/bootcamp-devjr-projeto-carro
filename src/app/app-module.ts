import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarComponent } from './components/car-component/car-component';
import { FormsModule } from '@angular/forms';
import { Cars } from './components/cars/cars';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    CarComponent,
    Cars
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
