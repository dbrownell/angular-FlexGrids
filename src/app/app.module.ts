import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlexgridComponent } from './flexgrid/flexgrid.component';
import {AccordionModule} from 'primeng/accordion';
//import {FlexGridModule} from 'primeflex/flexgrid';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AccordionModule ],
  declarations: [ AppComponent, FlexgridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
