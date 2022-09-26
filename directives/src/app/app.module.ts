import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirective } from './customdirectives/custom.directive';
import { CustomdirectivesComponent } from './customdirectives/customdirectives.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    CustomdirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
