import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextMaskModule } from 'angular2-text-mask';
import { CursormoveDirective } from './cursormove.directive';


@NgModule({
  declarations: [
    AppComponent,
    CursormoveDirective
  ],
  imports: [
    BrowserModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
