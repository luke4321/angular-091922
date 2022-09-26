import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirective } from './customdirectives/custom.directive';
import { CustomdirectivesComponent } from './customdirectives/customdirectives.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgfortrackbyComponent } from './ngfortrackby/ngfortrackby.component';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './ngif/ngif.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    CustomdirectivesComponent,
    NgforComponent,
    NgfortrackbyComponent,
    NgifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
