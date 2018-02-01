import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule}  from '@angular/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RoutingModule } from './routing/routing.module';
import { SquareComponent } from './square/square.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SquareComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
