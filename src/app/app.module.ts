import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { Error404Component } from './core/component/error-404/Error-404.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/nav-bar/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      
      
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
