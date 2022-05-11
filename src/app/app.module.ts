import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpComponent } from './up/up.component';
import { DownComponent } from './down/down.component';
import { ResetComponent } from './reset/reset.component';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    UpComponent,
    DownComponent,
    ResetComponent,
    HomeComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AppService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
