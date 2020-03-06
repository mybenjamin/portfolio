import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App Modules
import { AppRoutingModule } from './app-routing.module';

// App Components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
