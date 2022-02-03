//CORE Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
//ROUTER
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';

const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD'
  },
  display: {
    dateInput: 'MM-DD-YYYY'
  }
};

@NgModule({
  declarations: [AppComponent, SideBarComponent, RoutingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: 'TRl5YhciilFIdjl7lQJhbbGibXGeIwNMOKODHtyJ',
      deps: []
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
