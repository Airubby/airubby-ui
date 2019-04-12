import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AirubbyUIModule} from './airubby-ui/airubby-ui.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AirubbyUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
