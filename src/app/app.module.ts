import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import {NbButtonModule, NbLayoutModule, NbThemeModule} from "@nebular/theme";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NbEvaIconsModule} from "@nebular/eva-icons";

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent
  ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      NbThemeModule.forRoot({ name: 'cosmic' }),
      NbLayoutModule,
      NbEvaIconsModule,
      NbButtonModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
