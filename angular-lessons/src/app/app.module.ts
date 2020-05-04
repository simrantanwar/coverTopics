import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedControlsModule } from 'src/shared controls/shared-controls.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedControlsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
