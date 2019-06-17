import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemocmpComponent } from './democmp/democmp.component';
import { UsersService } from './Services/users.service';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpHeaders, HttpClientModule, HttpHandler  } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DemocmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    PDFModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
