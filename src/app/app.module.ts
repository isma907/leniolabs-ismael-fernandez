import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CongressListComponent} from './congress-list/congress-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AdvancedFilterPipe} from './shared/pipes/advanced-filter.pipe';
import {CongressMemberDetailComponent} from './congress-member-detail/congress-member-detail.component';
import {XhrInterceptor} from "./shared/interceptors/xhr.interceptor";
import {RouterModule} from "@angular/router";
import {UiModuleModule} from "./ui-module/ui-module.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CongressListComponent,
    AdvancedFilterPipe,
    CongressMemberDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    UiModuleModule
  ],
  providers: [
    AdvancedFilterPipe,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

