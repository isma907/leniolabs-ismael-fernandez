import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CongressListComponent} from './congress-list/congress-list.component';
import {UiModuleModule} from "./ui-module/ui-module.module";
import {MatTableModule} from "@angular/material/table";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {AdvancedFilterPipe} from './shared/pipes/advanced-filter.pipe';
import {CongressMemberDetailComponent} from './congress-member-detail/congress-member-detail.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {XhrInterceptor} from "./shared/interceptors/xhr.interceptor";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CongressListComponent,
    AdvancedFilterPipe,
    CongressMemberDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    UiModuleModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    AdvancedFilterPipe,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
