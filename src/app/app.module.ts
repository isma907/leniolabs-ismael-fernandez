import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CongressListComponent} from './congress-list/congress-list.component';
import {UiModuleModule} from "./ui-module/ui-module.module";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {AdvancedFilterPipe} from './shared/pipes/advanced-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CongressListComponent,
    AdvancedFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiModuleModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    AdvancedFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
