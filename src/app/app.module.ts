import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SymbolComponent } from './symbol/symbol.component';
import { ContainerComponent } from './container/container.component';
import { SymbolModel } from './models/models';

@NgModule({
  declarations: [
    AppComponent,
    SymbolComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
