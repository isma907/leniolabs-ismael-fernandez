import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CongressListComponent} from './congress-list/congress-list.component';
import {UiModuleModule} from "./ui-module/ui-module.module";

@NgModule({
  declarations: [
    AppComponent,
    CongressListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
