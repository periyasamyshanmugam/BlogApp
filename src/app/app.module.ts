import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CreateCompComponent } from './create-comp/create-comp.component';
import { ViewCompComponent } from './view-comp/view-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCompComponent,
    ViewCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'create-app',
        component:CreateCompComponent
      },
      {
        path:'view-app',
        component:ViewCompComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
