import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MaterailModule} from "../shared/sharedMtModule";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule ,MaterailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
