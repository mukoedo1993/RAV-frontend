import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; //core functionality to run our apps, and export some basic features we probably use in most of our apps.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component'

//all components in total.
@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent
  ],
  imports: [ //Some advanced concepts, not introduced in this RAV course.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
