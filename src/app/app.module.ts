import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { InterceptorService } from './services/api-interceptor.service';
import { AuthService } from './auth/auth.service';
import { PagesModule } from './pages/pages.module';
import { ResumeService } from './services/resume.service';
import { SortPipe } from './pipes/sort.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
// import { LocalDatePipe } from './pipes/local-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    // LocalDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    PagesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    AuthService,
    ResumeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
