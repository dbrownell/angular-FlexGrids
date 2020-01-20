import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlexgridComponent } from './flexgrid/flexgrid.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FlexgridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
