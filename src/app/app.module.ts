import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlexgridComponent } from './flexgrid/flexgrid.component';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, AccordionModule ],
  declarations: [ AppComponent, FlexgridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
