import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EasyComponent } from './Questions/easy/easy.component';
import { MediumComponent } from './Questions/medium/medium.component';

@NgModule({
  declarations: [
    AppComponent,
    EasyComponent,
    MediumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
