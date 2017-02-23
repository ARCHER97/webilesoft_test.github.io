import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }   from './app.component';
import { ClubsComponent } from './app.clubs.component';
import { AboutComponent } from './app.about.component';
import { CreatingClubComponent } from './app.creatingclub.component';

import { ClubService }         from './club.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent,
    ClubsComponent,
    AboutComponent,
    CreatingClubComponent
  ],
  providers: [
    ClubService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
